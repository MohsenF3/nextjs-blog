import { IconCircleAlert, IconInbox } from "@/shared/components/icons";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/shared/components/ui/alert";

export function CategoryListError() {
  return (
    <Alert variant="destructive">
      <IconCircleAlert />
      <AlertTitle>مشکلی پیش آمد</AlertTitle>
      <AlertDescription>لطفاً بعداً دوباره امتحان کنید.</AlertDescription>
    </Alert>
  );
}

export function CategoryListEmpty() {
  return (
    <Alert>
      <IconInbox />
      <AlertTitle>دسته‌بندی‌ای یافت نشد</AlertTitle>
      <AlertDescription>در حال حاضر دسته‌بندی‌ای موجود نیست.</AlertDescription>
    </Alert>
  );
}
