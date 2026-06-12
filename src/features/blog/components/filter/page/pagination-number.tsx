import { buttonVariants } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";

export default function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  isActive: boolean;
  position?: "first" | "last" | "middle" | "single" | undefined;
}) {
  const isDots = position === "middle";

  const className = cn(
    buttonVariants({
      variant: isActive ? "light" : "outline",
      size: "icon-lg",
    }),
    isDots && "pointer-events-none border-transparent text-muted-foreground",
  );

  if (isActive || isDots) {
    return <div className={className}>{page}</div>;
  }

  return (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}
