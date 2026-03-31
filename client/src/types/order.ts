import type { Food } from "./food";

export type FoodOrder = {
  id: number;
  totalPrice: number;
  status: string;
  createdAt: string;
  updatedAt: string;
};

export type FoodOrderItems = {
  id: number;
  quantity: number;
  foodId: number;
  foodOrderId: number;
  createdAt: string;
  updatedAt: string;
};

export type FoodOrderItemWithFood = FoodOrderItems & {
  food: Food;
};

export type FoodOrderWithItems = FoodOrder & {
  foodOrderItems: FoodOrderItemWithFood[];
};
