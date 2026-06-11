import Pagination from "@/features/blog/components/filter/page/pagination";
import { tryCatch } from "@/shared/lib/try-catch";
import { getPosts } from "../api";
import { BlogSearchParams } from "../schema";
import { isFilteredQuery } from "../utils";
import BlogCard from "./blog-card";
import FeaturedBlogCard from "./featured-blog-card";

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

  // check if the query is filtered or not
  const isFiltered = isFilteredQuery(query);
  // if the query is filtered, the first post is the featured one
  const featuredPost = !isFiltered ? data.results[16] : undefined;
  // if the query is filtered, the posts are sliced from the second one
  // otherwise, the posts are sliced from the first one
  const posts = featuredPost ? data.results.slice(1) : data.results;

  return (
    <div className="space-y-4 sm:space-y-6">
      {featuredPost && <FeaturedBlogCard {...featuredPost} />}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {posts.map((post) => (
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
