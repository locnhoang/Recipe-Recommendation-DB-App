# 🍳 Recipe Helper for Beginners

A smart recipe recommendation system designed specifically for college students and beginner cooks. Find recipes you can actually make with the ingredients you have in your kitchen!

![Recipe Helper Demo](https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop)

## ✨ Features

### 🥕 Smart Ingredient Matching
- **Add your available ingredients** to find recipes you can make right now
- **Strict Mode**: Show only recipes you can make with your current ingredients
- **Flexible Mode**: Show recipes with partial matches, sorted by compatibility
- **Quick Add buttons** for common college kitchen staples

### ⚡ Quick Meal Options
- **5-Minute Meals**: Perfect for busy students
- **15-Minute Meals**: Quick and easy recipes
- **30-Minute Meals**: More substantial but still fast
- **Budget Meals**: Cost-effective options
- **One-Pot Meals**: Minimal cleanup required
- **No-Cook Meals**: Zero cooking time required

### 🛒 Smart Shopping List
- **Automatic missing ingredient detection**
- **Interactive checklist** to track your shopping
- **Recipe tracking** - see which recipe each ingredient is for
- **Easy management** - add, remove, and clear items

### 🔍 Advanced Filtering
- **Category filtering**: Breakfast, Lunch, Dinner, Snacks
- **Difficulty levels**: Easy, Medium, Hard
- **Dietary preferences**: Vegetarian, Vegan, High-Protein, etc.
- **Search functionality**: Find recipes by name, description, or ingredients

### 👨‍🍳 Beginner-Friendly Features
- **Cooking tips** and guidance for new cooks
- **Visual difficulty indicators** with color coding
- **Step-by-step instructions** with clear formatting
- **Nutritional information** for each recipe
- **Prep and cook time** clearly displayed

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd recipe-recommendation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎯 How to Use

### 1. Adding Ingredients
- Type ingredients in the input field and press Enter
- Use the "Quick Add" buttons for common ingredients
- View your current ingredients in the blue tags

### 2. Finding Recipes
- **Browse all recipes** by default
- **Add ingredients** to see personalized recommendations
- **Use quick meal filters** for time-based options
- **Apply advanced filters** for specific dietary needs

### 3. Recipe Filtering Options
- **"Show only recipes I can make"**: Only shows recipes where you have all ingredients
- **"Strict matching"**: Requires all recipe ingredients to be available
- **Quick meal buttons**: Filter by cooking time and difficulty

### 4. Shopping List
- Click **"Add to Shopping List"** on any recipe
- Missing ingredients are automatically added
- Check off items as you shop
- Remove items you don't need

## 🏗️ Project Structure

```
recipe-recommendation/
├── src/
│   ├── App.jsx                 # Main app component
│   ├── RecipeRecommendationSystem.jsx  # Main recipe system
│   └── recipeDatabase.js       # Recipe data and helper functions
├── index.html                  # HTML template
├── main.jsx                    # React entry point
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **Lucide React** - Icon library
- **JavaScript ES6+** - Programming language

## 📊 Recipe Database

The app includes 20+ carefully curated recipes with:
- **Detailed ingredients** with amounts and units
- **Step-by-step instructions**
- **Nutritional information** (calories, protein, carbs, fat, fiber, sodium)
- **Cooking times** (prep and cook time)
- **Difficulty levels** (Easy, Medium, Hard)
- **Dietary tags** (vegetarian, vegan, high-protein, etc.)
- **Time-based tags** (under-10-min, under-15-min, etc.)

## 🎨 Features in Detail

### Smart Ingredient Matching Algorithm
- **Fuzzy matching**: Handles variations in ingredient names
- **Case-insensitive**: Works regardless of capitalization
- **Partial matching**: Finds ingredients even with slight name differences
- **Match percentage**: Shows how well your ingredients match each recipe

### Time-Based Filtering
- **Dynamic calculation**: Total time = prep time + cook time
- **Automatic tagging**: Recipes are tagged based on their total cooking time
- **Flexible filtering**: Multiple time ranges available

### User Experience
- **Responsive design**: Works on desktop, tablet, and mobile
- **Intuitive interface**: Easy to navigate for beginners
- **Visual feedback**: Clear indicators for recipe compatibility
- **Error handling**: Graceful fallbacks for missing images

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Recipe data curated for beginner cooks and college students
- Icons provided by [Lucide](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## 📞 Support

If you have any questions or run into issues:
1. Check the [Issues](https://github.com/your-username/recipe-recommendation/issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

---

**Happy Cooking! 🍳✨**