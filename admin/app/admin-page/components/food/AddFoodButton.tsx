"use client";

import { useState } from "react";
import { Plus, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { addFood } from "@/app/lib/food/add-food";
import { FoodCategory } from "@/app/types/food-category";
import { ImageUplaod } from "./ImageUpload";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type AddFoodButtonProps = {
  categoryId: number;
  categoryLabel: string;
  categories: FoodCategory[];
};

export function AddFoodButton({
  categoryId,
  categoryLabel,
  categories,
}: AddFoodButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const [form, setForm] = useState({
    foodName: "",
    description: "",
    price: "",
    ingredients: "",
    categoryId: categoryId,
  });

  const [image, setImage] = useState("");
  console.log("image: ", image);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async () => {
    if (!form.foodName || !form.price || !image || !form.ingredients) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      await addFood({
        foodName: form.foodName,
        description: " ",
        price: parseFloat(form.price),
        image: image,
        ingredients: form.ingredients,
        categoryId: Number(form.categoryId),
      });
      setOpen(false);
      setForm({
        foodName: "",
        description: "",
        price: "",
        ingredients: "",
        categoryId: categoryId,
      });
      setImage("");
      router.refresh();
    } catch (e) {
      setError("Failed to add food. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  console.log(form);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="rounded-xl border-2 border-dashed border-red-200 bg-white flex flex-col items-center justify-center gap-2 min-h-[180px] w-full group hover:bg-red-50 hover:border-red-300 transition-all cursor-pointer"
      >
        <div className="w-9 h-9 rounded-full bg-red-500 group-hover:bg-red-600 flex items-center justify-center transition-colors shadow">
          <Plus className="w-4 h-4 text-white" />
        </div>
        <p className="text-xs text-neutral-400 font-medium text-center px-4 leading-snug">
          Add new Dish to {categoryLabel}
        </p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-base font-bold text-neutral-800">
              Add New Dish
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-3">
            <div className="flex  gap-5">
              <div>
                <label className="text-xs font-medium text-neutral-500 mb-1.5 block">
                  Food name
                </label>
                <input
                  name="foodName"
                  value={form.foodName}
                  onChange={handleChange}
                  placeholder="e.g. Cheese Burger"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-500 mb-1.5 block">
                  Foood Price ($)
                </label>
                <input
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="e.g. 12.99"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-neutral-500 mb-1.5 block">
                Ingredients
              </label>
              <input
                name="ingredients"
                value={form.ingredients}
                onChange={handleChange}
                placeholder="e.g. Beef, cheese, lettuce"
                className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-neutral-500 mb-1.5 block">
                Image URL
              </label>
              {/* <input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              /> */}
              <ImageUplaod setImage={setImage} />
            </div>

            {/* <div>
              <label className="text-xs font-medium text-neutral-500 mb-1.5 block">
                Category
              </label>
              <select
                name="categoryId"
                value={form.categoryId}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.categoryName}
                  </option>
                ))}
              </select>
            </div> */}

            {error && <p className="text-xs text-red-500">{error}</p>}

            <div className="flex gap-2 pt-1">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 px-4 py-2 rounded-lg border border-neutral-200 text-sm font-medium text-neutral-600 hover:bg-neutral-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 disabled:opacity-60 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                {loading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                {loading ? "Adding..." : "Add Dish"}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
