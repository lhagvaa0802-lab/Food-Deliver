import { Order } from "./components/order";

import { DateFilter } from "./components/DateFilter";

type Props = {
  searchParams?: Promise<{ startDate?: string; endDate?: string }>;
};

export default async function OrdersPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <div className="p-6 bg-neutral-50 min-h-screen">
      <div className="flex justify-end mb-4">
        <DateFilter />
      </div>
      <Order searchParams={params} />
    </div>
  );
}