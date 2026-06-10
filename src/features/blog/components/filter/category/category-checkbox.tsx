"use client";

import { useCategoryFilter } from "@/features/blog/hooks/use-category-filter";
import { Category } from "@/features/blog/types";

export default function CategoryCheckbox({ blog_count, title, id }: Category) {
  const { activeCategory, setCategory } = useCategoryFilter();

  const isChecked = activeCategory === String(id);

  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setCategory(isChecked ? null : String(id))}
        className="rounded"
      />
      <span className="text-sm">{title}</span>
      <span className="text-xs text-muted-foreground">({blog_count})</span>
    </label>
  );
}
