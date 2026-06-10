import Link from "next/link";
import { cn } from "@/shared/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) {
  const className = cn(
    "min-h-9.5 min-w-9.5 py-2 px-2.5 inline-flex justify-center items-center text-sm rounded-md border border-transparent text-foreground",
    {
      "opacity-50 pointer-events-none bg-gray-300": isDisabled,
      "hover:bg-muted-hover focus:bg-muted-focus bg-green-500 text-white":
        !isDisabled,
    },
  );

  const icon =
    direction === "left" ? (
      <ChevronLeft className="size-3.5 shrink-0" />
    ) : (
      <ChevronRight className="size-3.5 shrink-0" />
    );

  if (isDisabled) {
    return (
      <div className={className} aria-disabled="true">
        {icon}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      aria-label={direction === "left" ? "صفحه قبل" : "صفحه بعد"}
    >
      {icon}
    </Link>
  );
}
