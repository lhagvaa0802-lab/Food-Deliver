"use client";

import { useState } from "react";
import { Plus, X, Loader2 } from "lucide-react";
import { addCategory } from "@/app/lib/categories/add-category";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function AddCategoryButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {
    if (!name.trim()) {
      setError("Category name is required.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await addCategory(name.trim());
      setName("");
      setOpen(false);
      router.refresh();
    } catch (e) {
      setError("Failed to add category. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* + trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="w-6 h-6 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors shadow ml-1"
      >
        <Plus className="w-3 h-3 text-white" />
      </button>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-sm rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-base font-bold text-neutral-800">
              Add New Category
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4 space-y-4">
            <div>
              <label className="text-xs font-medium text-neutral-500 mb-1.5 block">
                Category name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setError("");
                }}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="e.g. Desserts"
                className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition"
              />
              {error && <p className="text-xs text-red-500 mt-1.5">{error}</p>}
            </div>

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
                {loading ? "Adding..." : "Add Category"}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
