"use client";

import { useSearchParamsState } from "@/shared/hooks";
import { useDebouncedCallback } from "use-debounce";

export function useSearchFilter() {
  const { searchParams, setParam } = useSearchParamsState();

  const setSearch = useDebouncedCallback(
    (value: string) => setParam("search", value.trim() || null),
    300,
  );

  return {
    activeSearch: searchParams.get("search") ?? "",
    setSearch,
  };
}
