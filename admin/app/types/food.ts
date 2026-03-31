import type { FoodCategory } from "./food-category";

export type Food = {
  id: number;
  foodName: string;
  description: string;
  price: number;
  image: string;
  ingredients: string;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
};

export type FoodWithCategory = Food & {
  category: FoodCategory;
};
