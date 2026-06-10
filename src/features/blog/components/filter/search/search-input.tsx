"use client";

import { useSearchFilter } from "@/features/blog/hooks/use-search-filter";

export default function SearchInput() {
  const { activeSearch, setSearch } = useSearchFilter();

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="search" className="text-sm font-medium">
        جستجو مجله
      </label>
      <input
        id="search"
        placeholder="مثال: راهنمای خرید"
        defaultValue={activeSearch}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
