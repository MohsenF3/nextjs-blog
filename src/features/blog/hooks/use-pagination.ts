"use client";

import { useSearchParamsState } from "@/shared/hooks";

export function usePagination() {
  const { searchParams, pathname } = useSearchParamsState();

  const createPageURL = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    return `${pathname}?${params.toString()}`;
  };

  return {
    currentPage: Number(searchParams.get("page") ?? 1),
    createPageURL,
  };
}
