import BlogList from "@/features/blog/components/blog-list";
import BlogLoading from "@/features/blog/components/blog-loading";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog page",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto py-10">
      <Suspense fallback={<BlogLoading />}>
        <BlogList />
      </Suspense>
    </div>
  );
}
