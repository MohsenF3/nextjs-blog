import { BlogSearchParams } from "./schema";

export const DOTS = "..." as const;
export type PageItem = number | typeof DOTS;

export function generatePagination(
  currentPage: number,
  totalPages: number,
  isMobile = false,
): PageItem[] {
  if (isMobile) return generateMobilePagination(currentPage, totalPages);
  return generateDesktopPagination(currentPage, totalPages);
}

function generateDesktopPagination(
  currentPage: number,
  totalPages: number,
): PageItem[] {
  // [1, 2, 3, 4, 5]
  if (totalPages <= 5) {
    return range(1, totalPages);
  }

  // [1, 2, 3, 4, 5, ..., 24]
  if (currentPage <= 4) {
    return [...range(1, 5), DOTS, totalPages];
  }

  // [1, ..., 20, 21, 22, 23, 24]
  if (currentPage >= totalPages - 3) {
    return [1, DOTS, ...range(totalPages - 4, totalPages)];
  }

  // [1, ..., 11, 12, 13, ..., 24]
  return [
    1,
    DOTS,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    DOTS,
    totalPages,
  ];
}

function generateMobilePagination(
  currentPage: number,
  totalPages: number,
): PageItem[] {
  // [1, 2, 3, 4]
  if (totalPages <= 4) {
    return range(1, totalPages);
  }

  const leftAnchor = [1, 2];
  const rightAnchor = [totalPages - 1, totalPages];

  // [1, 2, ..., 23, 24]
  if (currentPage <= 2) {
    return [...leftAnchor, DOTS, ...rightAnchor];
  }

  // [1, 2, ..., 23, 24]
  if (currentPage >= totalPages - 1) {
    return [...leftAnchor, DOTS, ...rightAnchor];
  }

  // [1, 2, ..., 12, ..., 23, 24]
  return [...leftAnchor, DOTS, currentPage, DOTS, ...rightAnchor];
}

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

export const resolvePosition = (
  index: number,
  pages: PageItem[],
): "first" | "last" | "single" | "middle" | undefined => {
  const numberPages = pages.filter((p): p is number => p !== DOTS);

  if (numberPages.length === 1) return "single";

  const page = pages[index];
  if (page === DOTS) return "middle";

  const firstPage = numberPages[0];
  const lastPage = numberPages[numberPages.length - 1];

  if (page === firstPage) return "first";
  if (page === lastPage) return "last";

  return undefined;
};

export const isFilteredQuery = ({ search, category, page }: BlogSearchParams) =>
  page > 1 || !!search || !!category;
