import type { Food, FoodWithCategory } from "./food";
import type { SafeUser } from "./user";
import type { FoodCategory } from "./category";
import type { FoodOrderWithItems } from "./order";

export type LoginResponse = {
  message: string;
  accessToken: string;
  user: {
    id: number;
    email: string;
    role: "USER" | "ADMIN";
  };
};

export type CreateUserRequest = {
  email: string;
  password: string;
  age?: number;
  phoneNumber: string;
  role?: "USER" | "ADMIN";
};

export type CreateFoodRequest = {
  foodName: string;
  description: string;
  price: number;
  image: string;
  ingredients: string;
  categoryId: number;
};

export type GetFoodsResponse = {
  foods: Food[];
};

export type GetFoodsWithCategoryResponse = {
  foods: FoodWithCategory[];
};

export type GetUsersResponse = {
  users: SafeUser[];
};

export type GetCategoriesResponse = {
  categories: FoodCategory[];
};

export type GetOrdersResponse = {
  orders: FoodOrderWithItems[];
};
