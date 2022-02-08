interface NutrientsInfo {
  name: string;
  amount: number;
  unit: string;
}

export interface Recipe {
  id: number;
  title: string;
  servings: number;
  image: string;
  pricePerServing: number;
  nutrients: NutrientsInfo[];
}