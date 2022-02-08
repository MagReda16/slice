import { Recipe } from '../types';

const calcNutrients = (recipes: Recipe[]) => {
  const res: any = {};
  recipes.forEach((recipe: Recipe) => {
    recipe.nutrients.forEach((nutrient) => {
      res[nutrient.name] = {
        name: nutrient.name,
        unit: nutrient.unit,
        amount: res[nutrient.name] ? res[nutrient.name].amount + (nutrient.amount * recipe.quantity) : nutrient.amount * recipe.quantity
      }
    })
  });
  return res;
}

export { calcNutrients };