import { getCategories } from "@/features/blog/api";
import { tryCatch } from "@/shared/lib/try-catch";
import CategoryCheckbox from "./category-checkbox";
import CategorySelect from "./category-select";

export default async function CategoryList() {
  const [categories, error] = await tryCatch(getCategories());

  if (error) return <div>Something went wrong</div>;

  if (!categories.length) return <div>No categories found</div>;

  return (
    <>
      {/* desktop */}
      <div className="hidden md:block border p-4 rounded-xl space-y-5">
        <h2 className="text-lg text-primary-light">دسته بندی ها</h2>

        <div className="flex flex-col gap-2">
          {categories.map((category) => (
            <CategoryCheckbox key={category.id} {...category} />
          ))}
        </div>
      </div>

      {/* mobile */}
      <div className="block md:hidden">
        <CategorySelect categories={categories} />
      </div>
    </>
  );
}
