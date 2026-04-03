"use client";

import { useState } from "react";

type Status = "PENDING" | "DELIVERED" | "CANCELLED";

const statusStyles: Record<Status, string> = {
  PENDING: "bg-yellow-50 text-yellow-600 border border-yellow-200",
  DELIVERED: "bg-green-50 text-green-600 border border-green-200",
  CANCELLED: "bg-red-50 text-red-500 border border-red-200",
};

type Props = {
  orderId: number;
  currentStatus: Status;
};

export function OrderStatusSelect({ orderId, currentStatus }: Props) {
  const [status, setStatus] = useState<Status>(currentStatus);
  const [loading, setLoading] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as Status;
    setLoading(true);

    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });

      console.log("STATUS:", res.status);
      const data = await res.json();
      console.log("DATA:", data);

      if (res.ok) {
        setStatus(newStatus);
      }
    } catch (e) {
      console.error("Failed to update status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <select
      value={status}
      onChange={handleChange}
      disabled={loading}
      className={`px-2.5 py-1 rounded-full text-[11px] font-medium border cursor-pointer focus:outline-none ${statusStyles[status]}`}
    >
      <option value="PENDING">Pending</option>
      <option value="DELIVERED">Delivered</option>
      <option value="CANCELLED">Cancelled</option>
    </select>
  );
}
