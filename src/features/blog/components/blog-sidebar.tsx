import { Suspense } from "react";
import CreatePost from "./create-post/create-post";
import CategoryFilterSkeleton from "./filter/category/category-filter-loading";
import CategoryList from "./filter/category/category-list";
import SearchInput from "./filter/search/search-input";

export default function BlogSidebar() {
  return (
    <>
      <div className="hidden md:block">
        <SearchInput />
      </div>

      <Suspense fallback={<CategoryFilterSkeleton />}>
        <CategoryList />
      </Suspense>

      <CreatePost />
    </>
  );
}
