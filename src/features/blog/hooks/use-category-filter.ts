"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useCategoryFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const setCategory = (id: string | null) => {
    const params = new URLSearchParams(searchParams);

    if (id) {
      params.set("category", id);
    } else {
      params.delete("category");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return {
    activeCategory: searchParams.get("category"),
    setCategory,
  };
}
