import { Category } from "./components/category/FoodCategory";
import { Foods } from "./components/food/Foods";

export default async function AdminPage() {
  return (
    <div>
      <Category />
      <Foods />
    </div>
  );
}

