"use client";

import { useSearchFilter } from "@/features/blog/hooks/use-search-filter";
import { IconSearch } from "@/shared/components/icons";
import { IconInput } from "@/shared/components/ui/icon-input";
import { Label } from "@/shared/components/ui/label";

export default function SearchInput() {
  const { activeSearch, setSearch } = useSearchFilter();

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor="search">جستجو مجله</Label>
      <IconInput
        id="search"
        placeholder="مثال: راهنمای خرید و فروش"
        defaultValue={activeSearch}
        onChange={(e) => setSearch(e.target.value)}
        icon={<IconSearch className="size-5" />}
      />
    </div>
  );
}
