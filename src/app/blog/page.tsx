import BlogList from "@/features/blog/components/blog-list";
import BlogLoading from "@/features/blog/components/blog-loading";
import SearchInput from "@/features/blog/components/search-input";
import { blogSearchParamsSchema } from "@/features/blog/schema";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog page",
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function BlogPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;

  const query = blogSearchParamsSchema.parse(searchParams);

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-4 gap-4">
        <div className="">
          <div className="hidden md:block">
            <SearchInput />
          </div>
        </div>

        <div className="col-span-full md:col-span-3">
          <Suspense fallback={<BlogLoading />}>
            <BlogList key={JSON.stringify(query)} query={query} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
