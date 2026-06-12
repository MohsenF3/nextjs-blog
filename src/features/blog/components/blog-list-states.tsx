import { IconCircleAlert, IconInbox } from "@/shared/components/icons";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/shared/components/ui/alert";

export function BlogListError() {
  return (
    <div dir="rtl" className="my-6">
      <Alert variant="destructive">
        <IconCircleAlert />
        <AlertTitle>مشکلی پیش آمد</AlertTitle>
        <AlertDescription>لطفاً بعداً دوباره امتحان کنید.</AlertDescription>
      </Alert>
    </div>
  );
}

export function BlogListEmpty() {
  return (
    <div dir="rtl" className="my-6">
      <Alert>
        <IconInbox />
        <AlertTitle>مطلبی یافت نشد</AlertTitle>
        <AlertDescription>
          فیلترها یا عبارت جستجو را تغییر دهید و دوباره امتحان کنید.
        </AlertDescription>
      </Alert>
    </div>
  );
}
