interface NutrientsInfo {
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  recipeId: number;
  title: string;
  quantity: number;
  image: string;
  totalCost: number;
  pricePerServing: number;
  nutrients: NutrientsInfo[];
}