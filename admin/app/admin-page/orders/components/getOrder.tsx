import { fetchFoodOrders } from "@/app/lib/order/get-order";
import { FoodOrder } from "@/app/types/food-order";

export const Order = async () => {
  const orders: FoodOrder[] = await fetchFoodOrders();
  console.log("order--------", orders);

  return (
    <div className="flex flex-col gap-3">
      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-xl px-4 py-3 border border-neutral-100 shadow-sm"
        >
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-semibold text-neutral-800">
              {order.user.email}
            </p>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-neutral-100 text-neutral-600">
              {order.status}
            </span>
          </div>
          <p className="text-xs text-neutral-400">{order.user.phoneNumber}</p>
          <p className="text-sm font-bold text-neutral-800 mt-1">
            ${order.totalPrice}
          </p>
        </div>
      ))}
    </div>
  );
};
