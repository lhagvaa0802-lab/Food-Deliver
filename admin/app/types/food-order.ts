export type FoodOrder = {
  id: number;
  totalPrice: number;
  status: string;
  userId: number;
  user: {
    id: number;
    email: string;
    phoneNumber: string;
  };
  foodOrderItems: FoodOrderItem[];
  createdAt: string;
  updatedAt: string;
};

export type FoodOrderItem = {
  id: number;
  quantity: number;
  foodId: number;
  foodOrderId: number;
  createdAt: string;
  updatedAt: string;
};
