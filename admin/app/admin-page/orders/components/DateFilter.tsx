"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Calendar } from "lucide-react";

export function DateFilter() {
  const router = useRouter();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    if (!startDate || !endDate) return;
    router.push(`/admin-page/orders?startDate=${startDate}&endDate=${endDate}`);
  };

  const handleClear = () => {
    setStartDate("");
    setEndDate("");
    router.push("/admin-page/orders");
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 border border-neutral-200 rounded-lg px-3 py-2 text-xs text-neutral-600">
        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="focus:outline-none text-xs"
        />
        <span className="text-neutral-400">-</span>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="focus:outline-none text-xs"
        />
      </div>
      <button
        onClick={handleFilter}
        className="px-3 py-2 rounded-lg bg-neutral-800 text-white text-xs font-medium hover:bg-neutral-700 transition-colors"
      >
        Filter
      </button>
      {(startDate || endDate) && (
        <button
          onClick={handleClear}
          className="px-3 py-2 rounded-lg border border-neutral-200 text-xs font-medium text-neutral-500 hover:bg-neutral-50 transition-colors"
        >
          Clear
        </button>
      )}
    </div>
  );
}
