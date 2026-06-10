import { AppBreadcrumb } from "@/shared/components/app-breadcrumb";
import { PropsWithChildren } from "react";

export default function BreadcrumbLayout({ children }: PropsWithChildren) {
  return (
    <div className="container space-y-5">
      <AppBreadcrumb />

      {children}
    </div>
  );
}
