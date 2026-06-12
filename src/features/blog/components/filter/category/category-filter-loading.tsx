import { Skeleton } from "@/shared/components/ui/skeleton";

export default function CategoryFilterLoading() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden rounded-xl border p-4 md:block">
        <div className="space-y-5">
          <Skeleton className="h-7 w-32" />

          <div className="space-y-3">
            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="flex items-center gap-3">
                <Skeleton className="size-4 rounded-sm" />

                <Skeleton
                  className={`h-5 ${
                    index % 3 === 0 ? "w-28" : index % 3 === 1 ? "w-36" : "w-24"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block md:hidden">
        <Skeleton className="h-10 w-full rounded-lg" />
      </div>
    </>
  );
}
