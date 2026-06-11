"use client";

import { useCategoryFilter } from "@/features/blog/hooks/use-category-filter";
import { Category } from "@/features/blog/types";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Label } from "@/shared/components/ui/label";

export default function CategoryCheckbox({ blog_count, title, id }: Category) {
  const { activeCategory, setCategory } = useCategoryFilter();

  const stringId = String(id);
  const isChecked = activeCategory === stringId;

  return (
    <div className="flex items-center gap-3">
      <Checkbox
        id={stringId}
        checked={isChecked}
        onCheckedChange={(checked) => setCategory(checked ? stringId : null)}
      />
      <Label htmlFor={stringId} className="cursor-pointer text-base">
        {title}
        <span className="text-muted-foreground">({blog_count})</span>
      </Label>
    </div>
  );
}
