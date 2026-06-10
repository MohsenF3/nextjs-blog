export default function CategoryFilterSkeleton() {
  return (
    <>
      {/* desktop */}
      <div className="hidden md:block border p-3 rounded-lg">
        <div className="mb-4 h-5 w-32 animate-pulse rounded bg-gray-200" />
        <div className="flex flex-col gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />
              <div
                className="h-4 animate-pulse rounded bg-gray-200"
                style={{ width: `${70 + (i % 3) * 25}px` }}
              />
              <div className="h-3 w-8 animate-pulse rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </div>

      {/* mobile */}
      <div className="md:hidden h-10 w-full animate-pulse rounded-md bg-gray-200" />
    </>
  );
}
