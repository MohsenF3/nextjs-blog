export default function BlogLoading() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm"
          key={index}
        >
          {/* Image */}
          <div className="aspect-video animate-pulse bg-gray-200" />

          <div className="flex flex-col p-5">
            {/* Category */}
            <div className="mb-3 h-6 w-24 animate-pulse rounded-full bg-gray-200" />

            {/* Title */}
            <div className="mb-2 h-6 w-full animate-pulse rounded bg-gray-200" />
            <div className="mb-4 h-6 w-3/4 animate-pulse rounded bg-gray-200" />

            {/* Content */}
            <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200" />
            <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />

            {/* Date */}
            <div className="mt-5 border-t border-gray-100 pt-4">
              <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
