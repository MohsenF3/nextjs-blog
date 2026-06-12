"use client";

import { routes } from "@/config";
import { buttonVariants } from "@/shared/components/ui/button";
import { shabnamFont } from "@/shared/lib/fonts";
import Link from "next/link";

export default function GlobalError() {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`h-full antialiased ${shabnamFont.className}`}
    >
      <body className="min-h-screen flex items-center justify-center bg-background text-foreground p-4">
        <div className="w-full max-w-md rounded-xl border border-border bg-card p-6 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            ⚠️
          </div>

          <h2 className="text-lg font-semibold">مشکلی پیش آمده است</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            یک خطای غیرمنتظره رخ داده است. لطفاً دوباره تلاش کنید.
          </p>

          <div className="mt-6 flex flex-col gap-2">
            <Link
              href={routes.blog}
              onClick={() => (window.location.href = "/blog")}
              className={buttonVariants({
                variant: "light",
                className: "w-full",
              })}
            >
              بازگشت به بلاگ
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
