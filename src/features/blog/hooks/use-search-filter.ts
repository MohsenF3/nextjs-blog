"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function useSearchFilter() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const setSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value.trim()) {
      params.set("search", value.trim());
    } else {
      params.delete("search");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return {
    activeSearch: searchParams.get("search") ?? "",
    setSearch,
  };
}
