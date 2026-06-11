"use client";

import { useCategoryFilter } from "@/features/blog/hooks/use-category-filter";
import { Category } from "@/features/blog/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

export default function CategorySelect({
  categories,
}: {
  categories: Category[];
}) {
  const { activeCategory, setCategory } = useCategoryFilter();

  return (
    <Select
      value={activeCategory ?? "all"}
      onValueChange={(value) => setCategory(value === "all" ? null : value)}
      dir="rtl"
    >
      <SelectTrigger className="w-full" dir="rtl">
        <SelectValue placeholder="دسته بندی ها" />
      </SelectTrigger>
      <SelectContent dir="rtl" position="popper">
        <SelectItem value="all">دسته بندی ها</SelectItem>

        {categories.map((category) => (
          <SelectItem key={category.id} value={String(category.id)}>
            {category.title} ({category.blog_count})
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
