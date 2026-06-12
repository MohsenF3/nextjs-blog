import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/shared/components/ui/alert";
import { AlertCircle, Inbox } from "lucide-react";

export function CategoryListError() {
  return (
    <Alert variant="destructive">
      <AlertCircle />
      <AlertTitle>مشکلی پیش آمد</AlertTitle>
      <AlertDescription>لطفاً بعداً دوباره امتحان کنید.</AlertDescription>
    </Alert>
  );
}

export function CategoryListEmpty() {
  return (
    <Alert>
      <Inbox />
      <AlertTitle>دسته‌بندی‌ای یافت نشد</AlertTitle>
      <AlertDescription>در حال حاضر دسته‌بندی‌ای موجود نیست.</AlertDescription>
    </Alert>
  );
}
