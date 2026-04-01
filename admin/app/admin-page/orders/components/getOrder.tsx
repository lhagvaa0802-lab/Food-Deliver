import { fetchFoodOrders } from "@/app/lib/order/get-order";
import { FoodOrder } from "@/app/types/food-order";

const statusStyles: Record<string, string> = {
  Pending: "bg-yellow-50 text-yellow-600 border border-yellow-200",
  Delivered: "bg-green-50 text-green-600 border border-green-200",
  Cancelled: "bg-red-50 text-red-500 border border-red-200",
};

export const Order = async () => {
  const orders: FoodOrder[] = await fetchFoodOrders();

  return (
    <div className="bg-white rounded-xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-lg font-bold text-neutral-800">Orders</h1>
          <p className="text-xs text-neutral-400">{orders.length} items</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-neutral-100 text-neutral-500 text-xs font-medium hover:bg-neutral-200 transition-colors">
          Change delivery state
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-neutral-100">
              <th className="w-8 pb-3 text-left">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="text-left pb-3 text-xs font-semibold text-neutral-400 pr-4">
                №
              </th>
              <th className="text-left pb-3 text-xs font-semibold text-neutral-400 pr-4">
                Customer
              </th>
              <th className="text-left pb-3 text-xs font-semibold text-neutral-400 pr-4">
                Food
              </th>
              <th className="text-left pb-3 text-xs font-semibold text-neutral-400 pr-4">
                Date
              </th>
              <th className="text-left pb-3 text-xs font-semibold text-neutral-400 pr-4">
                Total
              </th>
              <th className="text-left pb-3 text-xs font-semibold text-neutral-400 pr-4">
                Delivery Address
              </th>
              <th className="text-left pb-3 text-xs font-semibold text-neutral-400">
                Delivery state
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order.id}
                className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors"
              >
                <td className="py-3">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="py-3 pr-4 text-xs text-neutral-500">
                  {index + 1}
                </td>
                <td className="py-3 pr-4">
                  <p className="text-xs font-medium text-neutral-700">
                    {order.user?.email ?? "N/A"}
                  </p>
                </td>
                <td className="py-3 pr-4 text-xs text-neutral-500">
                  {order.foodOrderItems?.length ?? 0} foods
                </td>
                <td className="py-3 pr-4 text-xs text-neutral-500">
                  {new Date(order.createdAt).toLocaleDateString()}
                </td>
                <td className="py-3 pr-4 text-xs font-semibold text-neutral-800">
                  ${order.totalPrice.toFixed(2)}
                </td>
                <td className="py-3 pr-4 text-xs text-neutral-500 max-w-[160px] truncate">
                  {order.user?.address ?? "—"} 
                  address
                </td>
                <td className="py-3">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${statusStyles[order.status] ?? "bg-neutral-100 text-neutral-500"}`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-1 mt-6">
        <button className="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-neutral-400 hover:bg-neutral-100">
          ‹
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-medium transition-colors ${page === 1 ? "bg-neutral-800 text-white" : "text-neutral-500 hover:bg-neutral-100"}`}
          >
            {page}
          </button>
        ))}
        <span className="text-xs text-neutral-400 px-1">...</span>
        <button className="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-neutral-500 hover:bg-neutral-100">
          10
        </button>
        <button className="w-7 h-7 rounded-lg flex items-center justify-center text-xs text-neutral-400 hover:bg-neutral-100">
          ›
        </button>
      </div>
    </div>
  );
};
