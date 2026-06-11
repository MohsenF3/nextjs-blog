"use client";

import { Field, FieldError, FieldLabel } from "@/shared/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";
import { CreatePostInput } from "../../schema";
import { Category } from "../../types";

export default function CategorySelectField({
  categories,
}: {
  categories: Category[];
}) {
  const { control } = useFormContext<CreatePostInput>();

  return (
    <Controller
      name="category"
      control={control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor="category">دسته بندی</FieldLabel>
          <Select
            value={field.value ? String(field.value) : ""}
            onValueChange={(val) => field.onChange(Number(val))}
          >
            <SelectTrigger
              id="category"
              aria-invalid={fieldState.invalid}
              className="w-full"
              dir="rtl"
            >
              {field.value ? (
                <SelectValue />
              ) : (
                <span className="text-muted-foreground">مثال: آموزشی</span>
              )}
            </SelectTrigger>
            <SelectContent dir="rtl" position="popper" className="max-h-50">
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={String(cat.id)}>
                  {cat.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
