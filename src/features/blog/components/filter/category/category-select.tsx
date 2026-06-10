"use client";

import { useCategoryFilter } from "@/features/blog/hooks/use-category-filter";
import { Category } from "@/features/blog/types";

export default function CategorySelect({
  categories,
}: {
  categories: Category[];
}) {
  const { activeCategory, setCategory } = useCategoryFilter();

  return (
    <select
      value={activeCategory ?? ""}
      onChange={(e) => setCategory(e.target.value || null)}
      className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
    >
      <option value="">همه دسته بندی ها</option>
      {categories.map((category) => (
        <option key={category.id} value={String(category.id)}>
          {category.title} ({category.blog_count})
        </option>
      ))}
    </select>
  );
}
