import Pagination from "@/features/blog/components/filter/page/pagination";
import { tryCatch } from "@/shared/lib/try-catch";
import { getPosts } from "../api";
import { BlogSearchParams } from "../schema";
import BlogCard from "./blog-card";

const PAGE_SIZE = 24;

export default async function BlogList({ query }: { query: BlogSearchParams }) {
  const [data, error] = await tryCatch(getPosts(query));

  if (error) {
    return (
      <div className="py-10 text-center text-sm text-destructive">
        Something went wrong. Please try again later.
      </div>
    );
  }

  if (!data.results.length) {
    return (
      <div className="py-10 text-center text-sm text-muted-foreground">
        No posts found.
      </div>
    );
  }

  const totalPages = Math.ceil(data.count / PAGE_SIZE);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {data.results.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}
