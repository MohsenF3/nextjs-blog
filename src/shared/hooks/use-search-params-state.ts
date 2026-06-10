"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useSearchParamsState(resetKeys: string[] = ["page"]) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const setParam = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    resetKeys.forEach((k) => params.delete(k));

    replace(`${pathname}?${params.toString()}`);
  };

  return { searchParams, pathname, setParam };
}
