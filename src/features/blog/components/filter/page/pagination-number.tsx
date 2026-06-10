import Link from "next/link";
import { cn } from "@/shared/lib/utils";

type Position = "first" | "last" | "middle" | "single" | undefined;

export default function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  isActive: boolean;
  position?: Position;
}) {
  const className = cn(
    "min-h-9.5 min-w-9.5 flex justify-center items-center border border-green-500 py-2 px-3 text-sm text-foreground focus:outline-none rounded-md",
    {
      "rounded-lg": position === "single",
      "bg-green-500 text-white pointer-events-none": isActive,
      "hover:bg-muted-hover": !isActive && position !== "middle",
      "text-muted-foreground pointer-events-none border-transparent":
        position === "middle",
    },
  );

  if (isActive || position === "middle") {
    return <div className={className}>{page}</div>;
  }

  return (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}
