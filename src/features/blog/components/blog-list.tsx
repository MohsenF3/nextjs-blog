import { tryCatch } from "@/shared/lib/try-catch";
import { getPosts } from "../api";
import BlogCard from "./blog-card";

export default async function BlogList() {
  const [data, error] = await tryCatch(getPosts());

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

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data.results.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}
