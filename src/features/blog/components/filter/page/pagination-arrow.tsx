import { buttonVariants } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { IconArrowLeft, IconArrowRight } from "@/shared/components/icons";
import Link from "next/link";

export default function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: "left" | "right";
  isDisabled?: boolean;
}) {
  const icon =
    direction === "left" ? (
      <IconArrowLeft className="size-5 shrink-0" />
    ) : (
      <IconArrowRight className="size-5 shrink-0" />
    );

  const className = cn(
    buttonVariants({
      variant: isDisabled ? "ghost" : "secondary",
      size: "icon-lg",
    }),
    isDisabled && "pointer-events-none opacity-50",
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
