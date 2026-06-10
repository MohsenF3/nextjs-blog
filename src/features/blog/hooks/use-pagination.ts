"use client";

import { usePathname, useSearchParams } from "next/navigation";

export function usePagination() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

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
