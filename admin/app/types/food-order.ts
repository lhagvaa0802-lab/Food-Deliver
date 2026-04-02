export type FoodOrderStatus = "PENDING" | "DELIVERED" | "CANCELLED";

export type FoodOrder = {
  id: number;
  totalPrice: number;
  status: FoodOrderStatus; // 👈 update this
  userId: number;
  user: {
    id: number;
    email: string;
    phoneNumber: string;
    address: string | null;
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
