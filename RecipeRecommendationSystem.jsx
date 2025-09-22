import React, { useState, useEffect } from 'react';
import { Search, Plus, X, Clock, Users, ChefHat, Star, Filter, Heart, ShoppingCart, Check } from 'lucide-react';
import { 
  getRecipesByIngredients, 
  getRecipesWithAvailableIngredients,
  getRecipesByCategory, 
  getRecipesByDifficulty, 
  searchRecipes,
  getCategories,
  getDifficulties,
  getTags
} from './recipeDatabase';

const RecipeRecommendationSystem = () => {
  const [availableIngredients, setAvailableIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState('');
  const [recommendedRecipes, setRecommendedRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [favoriteRecipes, setFavoriteRecipes] = useState(new Set());
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [strictMode, setStrictMode] = useState(false);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);
  const [showShoppingList, setShowShoppingList] = useState(false);

  const categories = ['All', ...getCategories()];
  const difficulties = ['All', ...getDifficulties()];
  const tags = getTags();

  // Common ingredients for quick selection (college student friendly)
  const commonIngredients = [
    'eggs', 'bread', 'rice', 'pasta', 'chicken', 'cheese', 'milk', 'butter',
    'tomato', 'onion', 'garlic', 'potato', 'carrot', 'broccoli', 'spinach', 'avocado',
    'lemon', 'olive oil', 'salt', 'pepper', 'flour', 'sugar', 'beef', 'salmon'
  ];

  // Quick meal options for college students
  const quickMealOptions = [
    { name: '5-Minute Meals', tags: ['under-10-min'], difficulty: 'Easy' },
    { name: '15-Minute Meals', tags: ['under-15-min'], difficulty: 'Easy' },
    { name: '30-Minute Meals', tags: ['under-30-min'], difficulty: 'Easy' },
    { name: 'Budget Meals', tags: ['quick', 'healthy'], difficulty: 'Easy' },
    { name: 'One-Pot Meals', tags: ['one-pan'], difficulty: 'Easy' },
    { name: 'No-Cook Meals', tags: ['no-cook'], difficulty: 'Easy' }
  ];

  useEffect(() => {
    updateRecommendations();
  }, [availableIngredients, searchQuery, selectedCategory, selectedDifficulty, selectedTags, strictMode, showOnlyAvailable]);

  const updateRecommendations = () => {
    let recipes = [];

    // Start with ingredient-based filtering
    if (availableIngredients.length > 0) {
      if (showOnlyAvailable) {
        // Show only recipes that can be made with available ingredients
        recipes = getRecipesWithAvailableIngredients(availableIngredients);
      } else {
        // Show recipes with at least one matching ingredient
        recipes = getRecipesByIngredients(availableIngredients, strictMode);
      }
    } else {
      // If no ingredients, show all recipes
      recipes = [...getRecipesByIngredients([])];
    }

    // Apply search filter
    if (searchQuery) {
      recipes = searchRecipes(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
      recipes = recipes.filter(recipe => recipe.category === selectedCategory);
    }

    // Apply difficulty filter
    if (selectedDifficulty !== 'All') {
      recipes = recipes.filter(recipe => recipe.difficulty === selectedDifficulty);
    }

    // Apply tag filters
    if (selectedTags.length > 0) {
      recipes = recipes.filter(recipe => {
        const recipeTags = [...recipe.tags, ...getTimeBasedTags(recipe)];
        return selectedTags.some(tag => recipeTags.includes(tag));
      });
    }

    // Sort by match percentage for ingredient-based recommendations
    if (availableIngredients.length > 0) {
      recipes.sort((a, b) => {
        const aMatch = calculateMatchPercentage(a, availableIngredients);
        const bMatch = calculateMatchPercentage(b, availableIngredients);
        // If match percentages are the same, sort by recipe name
        if (bMatch === aMatch) {
          return a.name.localeCompare(b.name);
        }
        return bMatch - aMatch;
      });
    } else {
      // If no ingredients, sort alphabetically
      recipes.sort((a, b) => a.name.localeCompare(b.name));
    }

    setRecommendedRecipes(recipes);
  };

  const calculateMatchPercentage = (recipe, ingredients) => {
    if (ingredients.length === 0) return 0;
    
    const recipeIngredients = recipe.ingredients.map(ing => ing.name.toLowerCase().trim());
    const normalizedIngredients = ingredients.map(ing => ing.toLowerCase().trim());
    
    const availableCount = recipeIngredients.filter(ing => 
      normalizedIngredients.some(available => 
        available.includes(ing) || ing.includes(available)
      )
    ).length;
    
    return (availableCount / recipeIngredients.length) * 100;
  };

  const addIngredient = (ingredient) => {
    const trimmedIngredient = ingredient.trim().toLowerCase();
    if (trimmedIngredient && !availableIngredients.includes(trimmedIngredient)) {
      setAvailableIngredients([...availableIngredients, trimmedIngredient]);
    }
    setIngredientInput('');
  };

  const removeIngredient = (ingredient) => {
    setAvailableIngredients(availableIngredients.filter(ing => ing !== ingredient));
  };

  const toggleTag = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const toggleFavorite = (recipeId) => {
    const newFavorites = new Set(favoriteRecipes);
    if (newFavorites.has(recipeId)) {
      newFavorites.delete(recipeId);
    } else {
      newFavorites.add(recipeId);
    }
    setFavoriteRecipes(newFavorites);
  };

  const openRecipeModal = (recipe) => {
    setCurrentRecipe(recipe);
    setShowRecipeModal(true);
  };

  const closeRecipeModal = () => {
    setShowRecipeModal(false);
    setCurrentRecipe(null);
  };

  const generateShoppingList = (recipe) => {
    const missingIngredients = recipe.ingredients.filter(ingredient => 
      !availableIngredients.some(available => 
        available.toLowerCase().includes(ingredient.name.toLowerCase()) ||
        ingredient.name.toLowerCase().includes(available.toLowerCase())
      )
    );
    
    const newShoppingList = missingIngredients.map(ingredient => ({
      id: Date.now() + Math.random(),
      name: ingredient.name,
      amount: ingredient.amount,
      unit: ingredient.unit,
      recipe: recipe.name,
      checked: false
    }));
    
    setShoppingList(prev => [...prev, ...newShoppingList]);
    setShowShoppingList(true);
  };

  const toggleShoppingItem = (itemId) => {
    setShoppingList(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const removeShoppingItem = (itemId) => {
    setShoppingList(prev => prev.filter(item => item.id !== itemId));
  };

  const clearShoppingList = () => {
    setShoppingList([]);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Hard': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getMatchColor = (percentage) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getTotalTime = (recipe) => {
    return recipe.prepTime + recipe.cookTime;
  };

  const getTimeBasedTags = (recipe) => {
    const totalTime = getTotalTime(recipe);
    const tags = [];
    
    if (totalTime <= 10) tags.push('under-10-min');
    if (totalTime <= 15) tags.push('under-15-min');
    if (totalTime <= 30) tags.push('under-30-min');
    if (totalTime <= 45) tags.push('under-45-min');
    if (totalTime <= 60) tags.push('under-60-min');
    if (totalTime <= 70) tags.push('under-70-min');
    
    if (recipe.cookTime === 0) tags.push('no-cook');
    
    return tags;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          🍳 Recipe Helper for Beginners
        </h1>
        <p className="text-gray-600">
          Perfect for college students and beginner cooks! Add your available ingredients to find recipes you can actually make.
        </p>
      </div>

      {/* Beginner Tips */}
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">💡 Beginner Cooking Tips</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <strong>Start Simple:</strong> Look for "Easy" difficulty recipes with 5-15 minute cook times.
          </div>
          <div>
            <strong>One-Pot Meals:</strong> Perfect for beginners - less cleanup, easier to manage.
          </div>
          <div>
            <strong>Read First:</strong> Always read the full recipe before starting to cook.
          </div>
          <div>
            <strong>Prep Ahead:</strong> Chop all ingredients before you start cooking.
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel - Ingredient Input */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              🥕 Your Ingredients
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Add what you have in your kitchen to find recipes you can make right now!
            </p>
            
            {/* Ingredient Input */}
            <div className="mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={ingredientInput}
                  onChange={(e) => setIngredientInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addIngredient(ingredientInput)}
                  placeholder="Add an ingredient..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => addIngredient(ingredientInput)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Current Ingredients */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Your Ingredients ({availableIngredients.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {availableIngredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {ingredient}
                    <button
                      onClick={() => removeIngredient(ingredient)}
                      className="ml-1 hover:text-blue-600"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Recipe Filtering Options */}
            {availableIngredients.length > 0 && (
              <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  🔍 Recipe Filtering
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={showOnlyAvailable}
                      onChange={(e) => setShowOnlyAvailable(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      Show only recipes I can make with my ingredients
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={strictMode}
                      onChange={(e) => setStrictMode(e.target.checked)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-700">
                      Strict matching (all ingredients must be available)
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Quick Add Common Ingredients */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                🚀 Quick Add Common Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {commonIngredients.slice(0, 12).map((ingredient, index) => (
                  <button
                    key={index}
                    onClick={() => addIngredient(ingredient)}
                    className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                  >
                    {ingredient}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Shopping List */}
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">🛒 Shopping List</h2>
              <button
                onClick={() => setShowShoppingList(!showShoppingList)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <ShoppingCart className="w-4 h-4" />
                {showShoppingList ? 'Hide' : 'Show'} List
              </button>
            </div>

            {showShoppingList && (
              <div>
                {shoppingList.length > 0 ? (
                  <div className="space-y-2">
                    {shoppingList.map((item) => (
                      <div key={item.id} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                        <button
                          onClick={() => toggleShoppingItem(item.id)}
                          className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            item.checked 
                              ? 'bg-green-500 border-green-500 text-white' 
                              : 'border-gray-300'
                          }`}
                        >
                          {item.checked && <Check className="w-3 h-3" />}
                        </button>
                        <div className="flex-1">
                          <div className={`text-sm ${item.checked ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                            {item.amount} {item.unit} {item.name}
                          </div>
                          <div className="text-xs text-gray-500">for {item.recipe}</div>
                        </div>
                        <button
                          onClick={() => removeShoppingItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={clearShoppingList}
                      className="w-full mt-3 px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors text-sm"
                    >
                      Clear All
                    </button>
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">
                    No items in your shopping list. Click "Add to Shopping List" on any recipe to get started!
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Quick Meal Options for College Students */}
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">⚡ Quick Meals</h2>
              {(selectedTags.length > 0 || selectedDifficulty !== 'All') && (
                <div className="text-sm text-blue-600">
                  {selectedTags.length > 0 && `${selectedTags.length} tag${selectedTags.length > 1 ? 's' : ''} selected`}
                  {selectedDifficulty !== 'All' && ` • ${selectedDifficulty} difficulty`}
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 gap-2">
              <button
                onClick={() => {
                  setSelectedTags([]);
                  setSelectedDifficulty('All');
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
              >
                <div className="font-medium text-blue-900">🔄 Clear All Filters</div>
                <div className="text-sm text-blue-600">Show all recipes</div>
              </button>
              {quickMealOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    // Set difficulty to Easy for all quick meals
                    setSelectedDifficulty('Easy');
                    
                    // Set the appropriate tags for filtering
                    if (option.tags) {
                      setSelectedTags(option.tags);
                    }
                    
                    // Clear other filters to focus on quick meals
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="font-medium text-gray-900">{option.name}</div>
                  <div className="text-sm text-gray-600">
                    {option.tags?.includes('under-10-min') ? 'Under 10 minutes' :
                     option.tags?.includes('under-15-min') ? 'Under 15 minutes' :
                     option.tags?.includes('under-30-min') ? 'Under 30 minutes' :
                     option.tags?.includes('no-cook') ? 'No cooking required' :
                     option.tags?.includes('one-pan') ? 'One-pan cooking' :
                     'Budget-friendly options'}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">🔧 Advanced Filters</h2>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? 'Hide' : 'Show'} Filters
              </button>
            </div>

            {showFilters && (
              <div className="space-y-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Difficulty Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Difficulty
                  </label>
                  <select
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {difficulties.map(difficulty => (
                      <option key={difficulty} value={difficulty}>{difficulty}</option>
                    ))}
                  </select>
                </div>

                {/* Tags Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dietary Preferences
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded-full text-sm transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Panel - Recipe Recommendations */}
        <div className="lg:col-span-2">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search recipes..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Results Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {showOnlyAvailable ? '✅ Recipes You Can Make' : '🍽️ Recommended Recipes'}
            </h2>
            <p className="text-gray-600">
              {recommendedRecipes.length} recipes found
              {availableIngredients.length > 0 && (
                showOnlyAvailable 
                  ? ' (only recipes you can make with your ingredients)'
                  : ' (sorted by ingredient match)'
              )}
            </p>
            {showOnlyAvailable && recommendedRecipes.length === 0 && availableIngredients.length > 0 && (
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-yellow-800">
                  <strong>No recipes found with your current ingredients.</strong> Try adding more ingredients or uncheck "Show only recipes I can make" to see partial matches.
                </p>
              </div>
            )}
          </div>

          {/* Recipe Cards */}
          <div className="space-y-6">
            {recommendedRecipes.map((recipe) => {
              const matchPercentage = availableIngredients.length > 0 
                ? calculateMatchPercentage(recipe, availableIngredients)
                : 0;
              const isFavorite = favoriteRecipes.has(recipe.id);

              return (
                <div key={recipe.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer" onClick={() => openRecipeModal(recipe)}>
                  <div className="flex gap-6 mb-4">
                    {/* Recipe Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="w-32 h-32 object-cover rounded-lg shadow-md"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop';
                        }}
                      />
                    </div>
                    
                    {/* Recipe Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{recipe.name}</h3>
                        <button
                          onClick={() => toggleFavorite(recipe.id)}
                          className={`p-1 rounded-full transition-colors ${
                            isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
                          }`}
                        >
                          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                      <p className="text-gray-600 mb-3">{recipe.description}</p>
                      
                      {/* Recipe Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {recipe.prepTime + recipe.cookTime} min
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {recipe.servings} servings
                        </div>
                        <div className="flex items-center gap-1">
                          <ChefHat className="w-4 h-4" />
                          <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(recipe.difficulty)}`}>
                            {recipe.difficulty}
                          </span>
                        </div>
                        {availableIngredients.length > 0 && (
                          <div className={`flex items-center gap-1 ${getMatchColor(matchPercentage)}`}>
                            <Star className="w-4 h-4" />
                            {showOnlyAvailable ? '✅ Can make!' : `${Math.round(matchPercentage)}% match`}
                          </div>
                        )}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {recipe.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Ingredients:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {recipe.ingredients.map((ingredient, index) => (
                        <div key={index} className="text-sm text-gray-600">
                          <span className="font-medium">{ingredient.amount} {ingredient.unit}</span> {ingredient.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Instructions */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Instructions:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm text-gray-600">
                      {recipe.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ol>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mb-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        generateShoppingList(recipe);
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Add to Shopping List
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openRecipeModal(recipe);
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
                    >
                      <ChefHat className="w-4 h-4" />
                      View Full Recipe
                    </button>
                  </div>

                  {/* Nutrition Info */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Nutrition (per serving):</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Calories:</span>
                        <span className="font-medium ml-1">{recipe.nutrition.calories}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Protein:</span>
                        <span className="font-medium ml-1">{recipe.nutrition.protein}g</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Carbs:</span>
                        <span className="font-medium ml-1">{recipe.nutrition.carbs}g</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Fat:</span>
                        <span className="font-medium ml-1">{recipe.nutrition.fat}g</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {recommendedRecipes.length === 0 && (
            <div className="text-center py-12">
              <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500 mb-2">No recipes found</h3>
              <p className="text-gray-400">
                Try adjusting your search query or filters to see more recipes
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Recipe Detail Modal */}
      {showRecipeModal && currentRecipe && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold text-gray-900">{currentRecipe.name}</h2>
                <button onClick={closeRecipeModal} className="text-gray-500 hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Recipe Image */}
              <div className="mb-6">
                <img
                  src={currentRecipe.image}
                  alt={currentRecipe.name}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop';
                  }}
                />
              </div>
              
              <p className="text-gray-600 mb-4">{currentRecipe.description}</p>

              <div className="flex items-center gap-6 text-gray-700 mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="w-5 h-5" />
                  <span>Prep: {currentRecipe.prepTime} min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-5 h-5" />
                  <span>Cook: {currentRecipe.cookTime} min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-5 h-5" />
                  <span>{currentRecipe.servings} servings</span>
                </div>
                <div className="flex items-center gap-1">
                  <ChefHat className="w-5 h-5" />
                  <span className={`px-2 py-1 rounded-full text-sm ${getDifficultyColor(currentRecipe.difficulty)}`}>
                    {currentRecipe.difficulty}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Ingredients */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Ingredients</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {currentRecipe.ingredients.map((ing, index) => (
                      <li key={index}>
                        <span className="font-medium">{ing.amount} {ing.unit}</span> {ing.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Instructions</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    {currentRecipe.instructions.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Nutrition Facts */}
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Nutrition Facts (per serving)</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-gray-700">
                  <span><span className="font-semibold">Calories:</span> {currentRecipe.nutrition.calories}</span>
                  <span><span className="font-semibold">Protein:</span> {currentRecipe.nutrition.protein}g</span>
                  <span><span className="font-semibold">Fat:</span> {currentRecipe.nutrition.fat}g</span>
                  <span><span className="font-semibold">Carbs:</span> {currentRecipe.nutrition.carbs}g</span>
                  <span><span className="font-semibold">Fiber:</span> {currentRecipe.nutrition.fiber}g</span>
                  <span><span className="font-semibold">Sodium:</span> {currentRecipe.nutrition.sodium}mg</span>
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {currentRecipe.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeRecommendationSystem;
