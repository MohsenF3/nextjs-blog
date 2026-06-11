import { Skeleton } from "@/shared/components/ui/skeleton";
import { BlogSearchParams } from "../schema";
import { isFilteredQuery } from "../utils";

function FeaturedCardSkeleton() {
  return (
    <div className="flex gap-2 sm:gap-3 rounded-xl border bg-card p-2 sm:p-3">
      <div className="flex flex-col justify-between gap-1 w-1/2">
        <Skeleton className="w-full rounded py-2 px-8 h-9" />

        <div className="flex flex-col gap-2">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="hidden sm:block h-4 w-full" />
          <Skeleton className="hidden sm:block h-4 w-full" />
          <Skeleton className="hidden sm:block h-4 w-2/3" />
        </div>

        <div className="flex items-center gap-[5.96px] sm:gap-5">
          <Skeleton className="size-6 sm:size-12 rounded-full" />
          <Skeleton className="h-3 w-20" />
        </div>
      </div>

      <Skeleton className="relative w-1/2 rounded-lg sm:h-75" />
    </div>
  );
}

function BlogCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <Skeleton className="aspect-video w-full rounded-none" />

      <div className="flex flex-col p-5">
        <Skeleton className="mb-3 h-6 w-24 rounded-full" />

        <Skeleton className="mb-2 h-6 w-full" />
        <Skeleton className="mb-4 h-6 w-3/4" />

        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="mb-2 h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />

        <div className="mt-5 border-t border-gray-100 pt-4">
          <Skeleton className="h-4 w-28" />
        </div>
      </div>
    </div>
  );
}

export default function BlogLoading({ query }: { query?: BlogSearchParams }) {
  const isFiltered = query ? isFilteredQuery(query) : false;

  return (
    <div className="space-y-4 sm:space-y-6">
      {!isFiltered && <FeaturedCardSkeleton />}

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
