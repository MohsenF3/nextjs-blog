"use client";

import { usePagination } from "@/features/blog/hooks/use-pagination";
import {
  DOTS,
  generatePagination,
  resolvePosition,
} from "@/features/blog/utils";
import { useMediaQuery } from "@/shared/hooks/use-media-query";
import PaginationArrow from "./pagination-arrow";
import PaginationNumber from "./pagination-number";

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages }: PaginationProps) {
  const { currentPage, createPageURL } = usePagination();

  const isMobile = useMediaQuery("(max-width: 640px)");

  const pages = generatePagination(currentPage, totalPages, isMobile);

  return (
    <nav
      className="flex items-center flex-row-reverse flex-wrap gap-1"
      dir="rtl"
      aria-label="صفحه‌بندی"
    >
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      {pages.map((page, index) => {
        if (page === DOTS) {
          return <PaginationEllipsis key={`dots-${index}`} />;
        }

        return (
          <PaginationNumber
            key={page}
            page={page}
            href={createPageURL(page)}
            position={resolvePosition(index, pages)}
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

function PaginationEllipsis() {
  return (
    <span
      className="flex h-9 w-9 items-center justify-center text-sm text-muted-foreground select-none"
      aria-hidden="true"
    >
      &hellip;
    </span>
  );
}
