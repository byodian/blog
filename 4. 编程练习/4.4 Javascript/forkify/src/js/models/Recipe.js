import axios from 'axios'
import {key, proxy} from '../config';

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
        this.title = res.data.recipe.title;
        this.author = res.data.recipe.publisher;
        this.img = res.data.recipe.image_url;
        this.url = res.data.recipe.source_url;
        this.ingredients = res.data.recipe.ingredients;
    } catch(error) {
      alert('Something Wrong! getRecipe()');
    }
  }

  calcTime() {
    // Assuming we need 15 min for each 3 ingredients.
    const num = this.ingredients.length;
    const periods = Math.ceil(num / 3);
    this.time = periods * 15;
  }

  calcServings() {
    this.servings = 4;
  }

  parseIngredient() {
    const unitsLong = ['tablespoon', 'tablespoons', 'cups','cup', 'ounces', 'ounce', 'teaspoons', 'teaspoon'];
    const unitsShort = ['tbsp', 'tbsp', 'cup', 'cup', 'ou', 'ou', 'tsp', 'tsp'];

    const newIngredient = this.ingredients.map(el => {
      // 1) Unitform uit
      let ingredient = el.toLowerCase();
      unitsLong.forEach((unit, index) => {
        ingredient = ingredient.replace(unit, unitsShort[index]);
      });

      // 2) remove parentheses
      ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');

      // 3) parse ingredients
      const arrIng = ingredient.split(' ');
      const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

      let objIng;
      if (unitIndex > -1) {
        // There is a unit
        // EX. 4 1/2 cups, arrCount = [4, 1/2] -> 4.5
        // EX. 4 cups, arrCount = [4] -> 4
        // EX.  cups, arrCount = [' '] -> 1
        // EX. cups, arrCount = [] -> 1
        const arrCount = arrIng.slice(0, unitIndex);
        let count;
        if (arrCount.length === 1) {
          if (parseInt(arrCount[0])) {
            count = eval(arrCount[0].replace('-', '+'));
          } else {
            count = 1;
          }
        } else if (arrCount.length > 1) {
          count = eval(arrCount.join('+'));
        } else if (arrCount.length === 0) {
          count = 1;
        }

        objIng ={
          count,
          unit: arrIng[unitIndex],
          ingredient: arrIng.slice(unitIndex + 1).join(' ')
        };

      } else if (parseInt(arrIng[0], 10)) { 
        // There is NO unit ,but 1st element is number
        objIng = {
          count: parseInt(arrIng[0], 10),
          unit: '',
          ingredient: arrIng.slice(1).join(' ')
        }

      } else if (unitIndex === -1){
        // There is NO unit
        objIng = {
          count: 1,
          unit: '',
          ingredient
        }
      }

      return objIng;
    })
    this.ingredients = newIngredient;
  }
  
  updateServings(type) {
    // Servings
    const newServings = type === 'dec' ? this.servings - 1: this.servings + 1;
    
    // Ingredients
    this.ingredients.forEach(ingredient => {
      ingredient.count *= (newServings / this.servings);
    });

    this.servings = newServings;
  } 
}