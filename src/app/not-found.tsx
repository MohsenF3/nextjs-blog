import { routes } from "@/config";
import { buttonVariants } from "@/shared/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background text-foreground p-4">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-6 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
          404
        </div>

        <h2 className="text-lg font-semibold">صفحه پیدا نشد</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          این صفحه وجود ندارد یا حذف شده است.
        </p>

        <Link
          href={routes.blog}
          className={buttonVariants({
            variant: "light",
            className: "w-full mt-6",
          })}
        >
          بازگشت به بلاگ
        </Link>
      </div>
    </div>
  );
}
