"use client";

import { usePagination } from "@/features/blog/hooks/use-pagination";
import { generatePagination } from "@/features/blog/utils";
import { useMediaQuery } from "@/shared/hooks";
import PaginationArrow from "./pagination-arrow";
import PaginationNumber from "./pagination-number";

const DOTS = "...";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const { currentPage, createPageURL } = usePagination();
  const isMobile = useMediaQuery("(max-width: 768px)");

  // get an array of pages that will be displayed in the pagination
  let allPages = generatePagination(currentPage, totalPages);

  if (isMobile) {
    allPages = allPages.slice(currentPage - 1, currentPage + 1).concat(DOTS);
  }

  return (
    <nav
      className="flex items-center flex-row-reverse gap-1"
      dir="rtl"
      aria-label="صفحه‌بندی"
    >
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      {allPages.map((page, index) => {
        let position: "first" | "last" | "single" | "middle" | undefined;
        if (index === 0) position = "first";
        if (index === allPages.length - 1) position = "last";
        if (allPages.length === 1) position = "single";
        if (page === "...") position = "middle";

        return (
          <PaginationNumber
            key={`${page}-${index}`}
            page={page}
            href={createPageURL(typeof page === "number" ? page : currentPage)}
            position={position}
            isActive={currentPage === page}
          />
        );
      })}

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </nav>
  );
}
