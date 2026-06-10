"use client";

import { useSearchParamsState } from "@/shared/hooks";

export function useCategoryFilter() {
  const { searchParams, setParam } = useSearchParamsState();

  return {
    activeCategory: searchParams.get("category"),
    setCategory: (id: string | null) => setParam("category", id),
  };
}
