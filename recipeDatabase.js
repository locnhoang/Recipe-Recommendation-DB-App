export const recipeDatabase = [
  // BREAKFAST RECIPES
  {
    id: 'avocado-toast',
    name: 'Avocado Toast',
    category: 'Breakfast',
    difficulty: 'Easy',
    prepTime: 5,
    cookTime: 5,
    servings: 1,
    image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=500&h=400&fit=crop',
    ingredients: [
      { name: 'bread', amount: '2 slices', unit: 'slices' },
      { name: 'avocado', amount: '1', unit: 'medium' },
      { name: 'lemon', amount: '1/2', unit: 'lemon' },
      { name: 'salt', amount: '1/4', unit: 'tsp' },
      { name: 'pepper', amount: '1/4', unit: 'tsp' },
      { name: 'olive oil', amount: '1', unit: 'tsp' }
    ],
    instructions: [
      'Toast the bread slices until golden brown',
      'Mash the avocado with lemon juice, salt, and pepper',
      'Spread the avocado mixture on the toast',
      'Drizzle with olive oil and serve'
    ],
    nutrition: {
      calories: 320,
      protein: 8,
      fat: 22,
      carbs: 28,
      fiber: 12,
      sodium: 400
    },
    tags: ['vegetarian', 'vegan', 'quick', 'healthy', 'under-15-min', 'under-10-min'],
    description: 'Simple and nutritious breakfast toast'
  },
  {
    id: 'scrambled-eggs',
    name: 'Scrambled Eggs',
    category: 'Breakfast',
    difficulty: 'Easy',
    prepTime: 2,
    cookTime: 5,
    servings: 1,
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500&h=400&fit=crop',
    ingredients: [
      { name: 'eggs', amount: '3', unit: 'large' },
      { name: 'butter', amount: '1', unit: 'tbsp' },
      { name: 'milk', amount: '2', unit: 'tbsp' },
      { name: 'salt', amount: '1/4', unit: 'tsp' },
      { name: 'pepper', amount: '1/8', unit: 'tsp' }
    ],
    instructions: [
      'Beat eggs with milk, salt, and pepper',
      'Heat butter in a non-stick pan over medium heat',
      'Add eggs and stir gently with a spatula',
      'Cook until eggs are set but still creamy'
    ],
    nutrition: {
      calories: 280,
      protein: 20,
      fat: 21,
      carbs: 2,
      fiber: 0,
      sodium: 300
    },
    tags: ['vegetarian', 'protein-rich', 'quick', 'under-10-min', 'under-15-min'],
    description: 'Classic fluffy scrambled eggs'
  },
  {
    id: 'overnight-oats',
    name: 'Overnight Oats',
    category: 'Breakfast',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 0,
    servings: 1,
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=500&h=400&fit=crop',
    ingredients: [
      { name: 'oats', amount: '1/2', unit: 'cup' },
      { name: 'milk', amount: '1/2', unit: 'cup' },
      { name: 'yogurt', amount: '1/4', unit: 'cup' },
      { name: 'honey', amount: '1', unit: 'tbsp' },
      { name: 'berries', amount: '1/4', unit: 'cup' },
      { name: 'chia seeds', amount: '1', unit: 'tsp' }
    ],
    instructions: [
      'Mix oats, milk, yogurt, and honey in a jar',
      'Add chia seeds and stir well',
      'Refrigerate overnight',
      'Top with berries before serving'
    ],
    nutrition: {
      calories: 320,
      protein: 15,
      fat: 8,
      carbs: 52,
      fiber: 8,
      sodium: 120
    },
    tags: ['vegetarian', 'make-ahead', 'healthy', 'fiber-rich', 'under-15-min', 'no-cook'],
    description: 'No-cook breakfast that prepares overnight'
  },

  // LUNCH RECIPES
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    category: 'Lunch',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 0,
    servings: 2,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500&h=400&fit=crop',
    ingredients: [
      { name: 'romaine lettuce', amount: '1', unit: 'head' },
      { name: 'parmesan cheese', amount: '1/4', unit: 'cup' },
      { name: 'croutons', amount: '1/2', unit: 'cup' },
      { name: 'olive oil', amount: '3', unit: 'tbsp' },
      { name: 'lemon', amount: '1', unit: 'lemon' },
      { name: 'garlic', amount: '2', unit: 'cloves' },
      { name: 'anchovies', amount: '2', unit: 'fillets' }
    ],
    instructions: [
      'Wash and chop romaine lettuce',
      'Make dressing with olive oil, lemon, garlic, and anchovies',
      'Toss lettuce with dressing',
      'Top with parmesan and croutons'
    ],
    nutrition: {
      calories: 280,
      protein: 12,
      fat: 22,
      carbs: 12,
      fiber: 4,
      sodium: 600
    },
    tags: ['vegetarian', 'quick', 'fresh', 'under-15-min', 'no-cook'],
    description: 'Classic Caesar salad with homemade dressing'
  },
  {
    id: 'chicken-stir-fry',
    name: 'Chicken Stir Fry',
    category: 'Lunch',
    difficulty: 'Medium',
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=400&fit=crop&q=80',
    ingredients: [
      { name: 'chicken breast', amount: '1', unit: 'lb' },
      { name: 'broccoli', amount: '2', unit: 'cups' },
      { name: 'bell pepper', amount: '1', unit: 'medium' },
      { name: 'soy sauce', amount: '3', unit: 'tbsp' },
      { name: 'garlic', amount: '3', unit: 'cloves' },
      { name: 'ginger', amount: '1', unit: 'tbsp' },
      { name: 'rice', amount: '1', unit: 'cup' }
    ],
    instructions: [
      'Cut chicken into bite-sized pieces',
      'Heat oil in wok or large pan',
      'Stir-fry chicken until cooked through',
      'Add vegetables and stir-fry until tender',
      'Add sauce and toss everything together',
      'Serve over rice'
    ],
    nutrition: {
      calories: 420,
      protein: 35,
      fat: 8,
      carbs: 45,
      fiber: 4,
      sodium: 800
    },
    tags: ['high-protein', 'quick', 'one-pan', 'under-30-min', 'under-25-min'],
    description: 'Quick and healthy chicken stir fry'
  },
  {
    id: 'quinoa-bowl',
    name: 'Quinoa Buddha Bowl',
    category: 'Lunch',
    difficulty: 'Easy',
    prepTime: 20,
    cookTime: 15,
    servings: 2,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop',
    ingredients: [
      { name: 'quinoa', amount: '1', unit: 'cup' },
      { name: 'sweet potato', amount: '1', unit: 'medium' },
      { name: 'chickpeas', amount: '1', unit: 'can' },
      { name: 'spinach', amount: '2', unit: 'cups' },
      { name: 'avocado', amount: '1', unit: 'medium' },
      { name: 'tahini', amount: '2', unit: 'tbsp' },
      { name: 'lemon', amount: '1', unit: 'lemon' }
    ],
    instructions: [
      'Cook quinoa according to package directions',
      'Roast sweet potato cubes until tender',
      'Drain and rinse chickpeas',
      'Make tahini dressing with lemon juice',
      'Assemble bowl with all ingredients',
      'Drizzle with tahini dressing'
    ],
    nutrition: {
      calories: 480,
      protein: 18,
      fat: 22,
      carbs: 58,
      fiber: 12,
      sodium: 400
    },
    tags: ['vegan', 'healthy', 'meal-prep', 'fiber-rich', 'under-35-min', 'under-30-min'],
    description: 'Nutritious and colorful Buddha bowl'
  },

  // DINNER RECIPES
  {
    id: 'salmon-teriyaki',
    name: 'Teriyaki Salmon',
    category: 'Dinner',
    difficulty: 'Medium',
    prepTime: 10,
    cookTime: 15,
    servings: 2,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500&h=400&fit=crop&q=80',
    ingredients: [
      { name: 'salmon fillet', amount: '1', unit: 'lb' },
      { name: 'soy sauce', amount: '1/4', unit: 'cup' },
      { name: 'honey', amount: '2', unit: 'tbsp' },
      { name: 'garlic', amount: '2', unit: 'cloves' },
      { name: 'ginger', amount: '1', unit: 'tbsp' },
      { name: 'sesame oil', amount: '1', unit: 'tsp' },
      { name: 'broccoli', amount: '2', unit: 'cups' }
    ],
    instructions: [
      'Mix soy sauce, honey, garlic, and ginger for marinade',
      'Marinate salmon for 30 minutes',
      'Preheat oven to 400°F',
      'Place salmon on baking sheet with broccoli',
      'Bake for 12-15 minutes until fish flakes easily',
      'Drizzle with sesame oil before serving'
    ],
    nutrition: {
      calories: 380,
      protein: 35,
      fat: 18,
      carbs: 15,
      fiber: 3,
      sodium: 900
    },
    tags: ['high-protein', 'omega-3', 'gluten-free', 'under-30-min', 'under-25-min'],
    description: 'Healthy salmon with teriyaki glaze'
  },
  {
    id: 'pasta-carbonara',
    name: 'Pasta Carbonara',
    category: 'Dinner',
    difficulty: 'Medium',
    prepTime: 10,
    cookTime: 20,
    servings: 4,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500&h=400&fit=crop&q=80',
    ingredients: [
      { name: 'pasta', amount: '1', unit: 'lb' },
      { name: 'bacon', amount: '6', unit: 'slices' },
      { name: 'eggs', amount: '4', unit: 'large' },
      { name: 'parmesan cheese', amount: '1', unit: 'cup' },
      { name: 'garlic', amount: '2', unit: 'cloves' },
      { name: 'black pepper', amount: '1', unit: 'tsp' }
    ],
    instructions: [
      'Cook pasta according to package directions',
      'Fry bacon until crispy, set aside',
      'Whisk eggs with parmesan and pepper',
      'Drain pasta, reserving some pasta water',
      'Toss hot pasta with bacon and egg mixture',
      'Add pasta water to create creamy sauce'
    ],
    nutrition: {
      calories: 520,
      protein: 28,
      fat: 24,
      carbs: 45,
      fiber: 2,
      sodium: 800
    },
    tags: ['comfort-food', 'creamy', 'italian', 'under-35-min', 'under-30-min'],
    description: 'Classic Italian pasta carbonara'
  },
  {
    id: 'vegetable-curry',
    name: 'Vegetable Curry',
    category: 'Dinner',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=400&fit=crop',
    ingredients: [
      { name: 'coconut milk', amount: '1', unit: 'can' },
      { name: 'curry paste', amount: '2', unit: 'tbsp' },
      { name: 'sweet potato', amount: '2', unit: 'medium' },
      { name: 'cauliflower', amount: '1', unit: 'head' },
      { name: 'chickpeas', amount: '1', unit: 'can' },
      { name: 'onion', amount: '1', unit: 'medium' },
      { name: 'garlic', amount: '3', unit: 'cloves' },
      { name: 'rice', amount: '2', unit: 'cups' }
    ],
    instructions: [
      'Sauté onion and garlic until fragrant',
      'Add curry paste and cook for 1 minute',
      'Add coconut milk and bring to simmer',
      'Add vegetables and chickpeas',
      'Simmer for 20 minutes until tender',
      'Serve over rice'
    ],
    nutrition: {
      calories: 420,
      protein: 15,
      fat: 18,
      carbs: 55,
      fiber: 12,
      sodium: 600
    },
    tags: ['vegan', 'spicy', 'comfort-food', 'fiber-rich', 'under-45-min', 'under-40-min'],
    description: 'Creamy and spicy vegetable curry'
  },

  // SNACKS
  {
    id: 'hummus',
    name: 'Homemade Hummus',
    category: 'Snack',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 0,
    servings: 6,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&h=400&fit=crop',
    ingredients: [
      { name: 'chickpeas', amount: '1', unit: 'can' },
      { name: 'tahini', amount: '1/4', unit: 'cup' },
      { name: 'lemon', amount: '1', unit: 'lemon' },
      { name: 'garlic', amount: '2', unit: 'cloves' },
      { name: 'olive oil', amount: '2', unit: 'tbsp' },
      { name: 'salt', amount: '1/2', unit: 'tsp' }
    ],
    instructions: [
      'Drain and rinse chickpeas',
      'Add all ingredients to food processor',
      'Blend until smooth and creamy',
      'Add water if needed for consistency',
      'Serve with vegetables or pita bread'
    ],
    nutrition: {
      calories: 120,
      protein: 4,
      fat: 8,
      carbs: 10,
      fiber: 3,
      sodium: 200
    },
    tags: ['vegan', 'protein-rich', 'dip', 'make-ahead', 'under-15-min', 'no-cook'],
    description: 'Creamy and flavorful hummus dip'
  },

  // ADDITIONAL BREAKFAST RECIPES
  {
    id: 'french-toast',
    name: 'French Toast',
    category: 'Breakfast',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&h=400&fit=crop&q=80',
    ingredients: [
      { name: 'bread', amount: '8', unit: 'slices' },
      { name: 'eggs', amount: '4', unit: 'large' },
      { name: 'milk', amount: '1', unit: 'cup' },
      { name: 'vanilla extract', amount: '1', unit: 'tsp' },
      { name: 'cinnamon', amount: '1/2', unit: 'tsp' },
      { name: 'butter', amount: '2', unit: 'tbsp' },
      { name: 'maple syrup', amount: '1/4', unit: 'cup' }
    ],
    instructions: [
      'Whisk eggs, milk, vanilla, and cinnamon in a shallow dish',
      'Dip bread slices in egg mixture, coating both sides',
      'Heat butter in a large skillet over medium heat',
      'Cook bread until golden brown on both sides',
      'Serve with maple syrup'
    ],
    nutrition: {
      calories: 320,
      protein: 14,
      fat: 12,
      carbs: 38,
      fiber: 2,
      sodium: 400
    },
    tags: ['comfort-food', 'sweet', 'family-friendly', 'under-25-min', 'under-20-min'],
    description: 'Classic sweet breakfast treat'
  },
  {
    id: 'smoothie-bowl',
    name: 'Acai Smoothie Bowl',
    category: 'Breakfast',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 0,
    servings: 1,
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=500&h=400&fit=crop&q=80',
    ingredients: [
      { name: 'frozen acai', amount: '1', unit: 'pack' },
      { name: 'banana', amount: '1', unit: 'medium' },
      { name: 'almond milk', amount: '1/2', unit: 'cup' },
      { name: 'granola', amount: '1/4', unit: 'cup' },
      { name: 'berries', amount: '1/4', unit: 'cup' },
      { name: 'coconut flakes', amount: '1', unit: 'tbsp' },
      { name: 'honey', amount: '1', unit: 'tbsp' }
    ],
    instructions: [
      'Blend acai, banana, and almond milk until smooth',
      'Pour into a bowl',
      'Top with granola, berries, and coconut flakes',
      'Drizzle with honey and serve immediately'
    ],
    nutrition: {
      calories: 280,
      protein: 6,
      fat: 8,
      carbs: 52,
      fiber: 8,
      sodium: 120
    },
    tags: ['vegan', 'healthy', 'instagram-worthy', 'antioxidant-rich', 'under-15-min', 'no-cook'],
    description: 'Instagram-worthy healthy breakfast bowl'
  },
  {
    id: 'breakfast-burrito',
    name: 'Breakfast Burrito',
    category: 'Breakfast',
    difficulty: 'Medium',
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=400&fit=crop&q=80',
    ingredients: [
      { name: 'tortillas', amount: '2', unit: 'large' },
      { name: 'eggs', amount: '4', unit: 'large' },
      { name: 'bacon', amount: '4', unit: 'slices' },
      { name: 'cheese', amount: '1/2', unit: 'cup' },
      { name: 'potato', amount: '1', unit: 'medium' },
      { name: 'onion', amount: '1/4', unit: 'cup' },
      { name: 'salsa', amount: '1/4', unit: 'cup' },
      { name: 'avocado', amount: '1/2', unit: 'medium' }
    ],
    instructions: [
      'Cook bacon until crispy, set aside',
      'Sauté diced potato and onion until tender',
      'Scramble eggs in the same pan',
      'Warm tortillas and add scrambled eggs, bacon, potato, cheese',
      'Top with salsa and avocado, roll up tightly'
    ],
    nutrition: {
      calories: 520,
      protein: 28,
      fat: 32,
      carbs: 35,
      fiber: 6,
      sodium: 800
    },
    tags: ['high-protein', 'portable', 'savory', 'under-30-min', 'under-25-min'],
    description: 'Hearty, portable breakfast wrap'
  },

  // ADDITIONAL LUNCH RECIPES
  {
    id: 'grilled-cheese',
    name: 'Grilled Cheese Sandwich',
    category: 'Lunch',
    difficulty: 'Easy',
    prepTime: 5,
    cookTime: 8,
    servings: 1,
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500&h=400&fit=crop',
    ingredients: [
      { name: 'bread', amount: '2', unit: 'slices' },
      { name: 'cheese', amount: '2', unit: 'slices' },
      { name: 'butter', amount: '1', unit: 'tbsp' },
      { name: 'tomato', amount: '2', unit: 'slices' },
      { name: 'basil', amount: '2', unit: 'leaves' }
    ],
    instructions: [
      'Butter one side of each bread slice',
      'Place cheese and tomato between bread slices',
      'Heat skillet over medium heat',
      'Cook sandwich until golden brown on both sides',
      'Garnish with fresh basil'
    ],
    nutrition: {
      calories: 420,
      protein: 18,
      fat: 24,
      carbs: 32,
      fiber: 2,
      sodium: 600
    },
    tags: ['comfort-food', 'quick', 'vegetarian', 'under-15-min', 'under-10-min'],
    description: 'Classic comfort food sandwich'
  },
  {
    id: 'chicken-caesar-wrap',
    name: 'Chicken Caesar Wrap',
    category: 'Lunch',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 0,
    servings: 1,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=400&fit=crop',
    ingredients: [
      { name: 'tortilla', amount: '1', unit: 'large' },
      { name: 'chicken breast', amount: '4', unit: 'oz' },
      { name: 'romaine lettuce', amount: '1', unit: 'cup' },
      { name: 'parmesan cheese', amount: '2', unit: 'tbsp' },
      { name: 'caesar dressing', amount: '2', unit: 'tbsp' },
      { name: 'croutons', amount: '1/4', unit: 'cup' },
      { name: 'tomato', amount: '2', unit: 'slices' }
    ],
    instructions: [
      'Cook and slice chicken breast',
      'Lay tortilla flat and add lettuce',
      'Top with chicken, cheese, croutons, and tomato',
      'Drizzle with caesar dressing',
      'Roll up tightly and slice in half'
    ],
    nutrition: {
      calories: 380,
      protein: 32,
      fat: 18,
      carbs: 28,
      fiber: 3,
      sodium: 700
    },
    tags: ['high-protein', 'portable', 'fresh', 'under-15-min', 'no-cook'],
    description: 'Fresh and portable lunch wrap'
  },
  {
    id: 'quinoa-salad',
    name: 'Mediterranean Quinoa Salad',
    category: 'Lunch',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&h=400&fit=crop',
    ingredients: [
      { name: 'quinoa', amount: '1', unit: 'cup' },
      { name: 'cucumber', amount: '1', unit: 'medium' },
      { name: 'tomato', amount: '2', unit: 'medium' },
      { name: 'red onion', amount: '1/4', unit: 'cup' },
      { name: 'kalamata olives', amount: '1/4', unit: 'cup' },
      { name: 'feta cheese', amount: '1/2', unit: 'cup' },
      { name: 'olive oil', amount: '3', unit: 'tbsp' },
      { name: 'lemon', amount: '1', unit: 'lemon' },
      { name: 'oregano', amount: '1', unit: 'tsp' }
    ],
    instructions: [
      'Cook quinoa according to package directions',
      'Dice cucumber, tomato, and red onion',
      'Mix quinoa with vegetables and olives',
      'Crumble feta cheese on top',
      'Whisk olive oil, lemon juice, and oregano for dressing',
      'Toss salad with dressing and serve'
    ],
    nutrition: {
      calories: 320,
      protein: 12,
      fat: 18,
      carbs: 32,
      fiber: 4,
      sodium: 400
    },
    tags: ['vegan', 'mediterranean', 'meal-prep', 'fresh', 'under-35-min', 'under-30-min'],
    description: 'Fresh Mediterranean-inspired salad'
  },

  // ADDITIONAL DINNER RECIPES
  {
    id: 'spaghetti-bolognese',
    name: 'Spaghetti',
    category: 'Dinner',
    difficulty: 'Medium',
    prepTime: 20,
    cookTime: 45,
    servings: 6,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=500&h=400&fit=crop',
    ingredients: [
      { name: 'spaghetti', amount: '1', unit: 'lb' },
      { name: 'ground beef', amount: '1', unit: 'lb' },
      { name: 'onion', amount: '1', unit: 'medium' },
      { name: 'garlic', amount: '3', unit: 'cloves' },
      { name: 'carrot', amount: '1', unit: 'medium' },
      { name: 'celery', amount: '2', unit: 'stalks' },
      { name: 'tomato paste', amount: '2', unit: 'tbsp' },
      { name: 'crushed tomatoes', amount: '28', unit: 'oz' },
      { name: 'red wine', amount: '1/2', unit: 'cup' },
      { name: 'parmesan cheese', amount: '1/2', unit: 'cup' }
    ],
    instructions: [
      'Sauté onion, garlic, carrot, and celery until soft',
      'Add ground beef and cook until browned',
      'Stir in tomato paste and cook for 2 minutes',
      'Add crushed tomatoes and red wine, simmer for 30 minutes',
      'Cook spaghetti according to package directions',
      'Serve sauce over pasta with parmesan cheese'
    ],
    nutrition: {
      calories: 480,
      protein: 28,
      fat: 16,
      carbs: 58,
      fiber: 4,
      sodium: 600
    },
    tags: ['comfort-food', 'italian', 'family-friendly', 'under-70-min', 'under-65-min'],
    description: 'Classic Italian comfort food'
  },
  {
    id: 'chicken-tikka-masala',
    name: 'Chicken Tikka Masala',
    category: 'Dinner',
    difficulty: 'Medium',
    prepTime: 30,
    cookTime: 30,
    servings: 4,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=400&fit=crop',
    ingredients: [
      { name: 'chicken breast', amount: '1.5', unit: 'lbs' },
      { name: 'yogurt', amount: '1/2', unit: 'cup' },
      { name: 'garlic', amount: '4', unit: 'cloves' },
      { name: 'ginger', amount: '2', unit: 'tbsp' },
      { name: 'garam masala', amount: '2', unit: 'tsp' },
      { name: 'cumin', amount: '1', unit: 'tsp' },
      { name: 'tomato sauce', amount: '1', unit: 'can' },
      { name: 'heavy cream', amount: '1/2', unit: 'cup' },
      { name: 'onion', amount: '1', unit: 'medium' },
      { name: 'rice', amount: '2', unit: 'cups' }
    ],
    instructions: [
      'Marinate chicken in yogurt, garlic, ginger, and spices for 30 minutes',
      'Cook chicken until done, set aside',
      'Sauté onion until golden, add spices',
      'Add tomato sauce and simmer for 15 minutes',
      'Stir in cream and cooked chicken',
      'Serve over rice with naan bread'
    ],
    nutrition: {
      calories: 420,
      protein: 35,
      fat: 18,
      carbs: 28,
      fiber: 2,
      sodium: 500
    },
    tags: ['indian', 'spicy', 'creamy', 'aromatic', 'under-65-min', 'under-60-min'],
    description: 'Creamy Indian curry dish'
  },
  {
    id: 'beef-stir-fry',
    name: 'Beef and Broccoli Stir Fry',
    category: 'Dinner',
    difficulty: 'Easy',
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=500&h=400&fit=crop',
    ingredients: [
      { name: 'beef sirloin', amount: '1', unit: 'lb' },
      { name: 'broccoli', amount: '2', unit: 'cups' },
      { name: 'soy sauce', amount: '3', unit: 'tbsp' },
      { name: 'oyster sauce', amount: '2', unit: 'tbsp' },
      { name: 'garlic', amount: '3', unit: 'cloves' },
      { name: 'ginger', amount: '1', unit: 'tbsp' },
      { name: 'cornstarch', amount: '1', unit: 'tbsp' },
      { name: 'sesame oil', amount: '1', unit: 'tsp' },
      { name: 'rice', amount: '2', unit: 'cups' }
    ],
    instructions: [
      'Slice beef thinly against the grain',
      'Mix soy sauce, oyster sauce, and cornstarch for sauce',
      'Heat oil in wok, stir-fry beef until browned',
      'Add garlic and ginger, stir-fry for 30 seconds',
      'Add broccoli and sauce, stir-fry until tender',
      'Serve over rice with sesame oil drizzle'
    ],
    nutrition: {
      calories: 380,
      protein: 32,
      fat: 12,
      carbs: 28,
      fiber: 3,
      sodium: 800
    },
    tags: ['chinese', 'quick', 'high-protein', 'one-pan', 'under-35-min', 'under-30-min'],
    description: 'Quick and healthy Asian stir fry'
  },

  // ADDITIONAL SNACK RECIPES
  {
    id: 'guacamole',
    name: 'Fresh Guacamole',
    category: 'Snack',
    difficulty: 'Easy',
    prepTime: 10,
    cookTime: 0,
    servings: 6,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=500&h=400&fit=crop',
    ingredients: [
      { name: 'avocado', amount: '3', unit: 'medium' },
      { name: 'lime', amount: '1', unit: 'lime' },
      { name: 'tomato', amount: '1', unit: 'medium' },
      { name: 'onion', amount: '1/4', unit: 'cup' },
      { name: 'cilantro', amount: '2', unit: 'tbsp' },
      { name: 'jalapeño', amount: '1', unit: 'small' },
      { name: 'salt', amount: '1/2', unit: 'tsp' },
      { name: 'tortilla chips', amount: '1', unit: 'bag' }
    ],
    instructions: [
      'Mash avocados with lime juice and salt',
      'Dice tomato, onion, and jalapeño',
      'Mix all ingredients together',
      'Adjust seasoning to taste',
      'Serve immediately with tortilla chips'
    ],
    nutrition: {
      calories: 120,
      protein: 2,
      fat: 11,
      carbs: 6,
      fiber: 5,
      sodium: 200
    },
    tags: ['mexican', 'fresh', 'dip', 'healthy', 'under-15-min', 'no-cook'],
    description: 'Fresh and zesty avocado dip'
  },
];

// Helper function to get recipes by ingredients
export const getRecipesByIngredients = (availableIngredients, strictMode = false) => {
  // If no ingredients provided, return all recipes
  if (!availableIngredients || availableIngredients.length === 0) {
    return recipeDatabase;
  }
  
  const normalizedIngredients = availableIngredients.map(ing => 
    ing.toLowerCase().trim()
  );
  
  return recipeDatabase.filter(recipe => {
    const recipeIngredients = recipe.ingredients.map(ing => 
      ing.name.toLowerCase().trim()
    );
    
    if (strictMode) {
      // Strict mode: all recipe ingredients must be available
      return recipeIngredients.every(ing => 
        normalizedIngredients.some(available => 
          available.includes(ing) || ing.includes(available)
        )
      );
    } else {
      // Default mode: at least one ingredient matches
      return recipeIngredients.some(ing => 
        normalizedIngredients.some(available => 
          available.includes(ing) || ing.includes(available)
        )
      );
    }
  });
};

// Helper function to get recipes that can be made with available ingredients only
export const getRecipesWithAvailableIngredients = (availableIngredients) => {
  return getRecipesByIngredients(availableIngredients, true);
};

// Helper function to get recipes by category
export const getRecipesByCategory = (category) => {
  return recipeDatabase.filter(recipe => 
    recipe.category.toLowerCase() === category.toLowerCase()
  );
};

// Helper function to get recipes by difficulty
export const getRecipesByDifficulty = (difficulty) => {
  return recipeDatabase.filter(recipe => 
    recipe.difficulty.toLowerCase() === difficulty.toLowerCase()
  );
};

// Helper function to search recipes
export const searchRecipes = (query) => {
  const searchTerm = query.toLowerCase();
  return recipeDatabase.filter(recipe => 
    recipe.name.toLowerCase().includes(searchTerm) ||
    recipe.description.toLowerCase().includes(searchTerm) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchTerm))
  );
};

// Get all unique categories
export const getCategories = () => {
  return [...new Set(recipeDatabase.map(recipe => recipe.category))];
};

// Get all unique difficulties
export const getDifficulties = () => {
  return [...new Set(recipeDatabase.map(recipe => recipe.difficulty))];
};

// Get all unique tags
export const getTags = () => {
  const allTags = recipeDatabase.flatMap(recipe => recipe.tags);
  return [...new Set(allTags)];
};
