"use client";

import { IconUserSquare } from "@/shared/components/icons";
import { Field, FieldError, FieldLabel } from "@/shared/components/ui/field";
import { IconInput } from "@/shared/components/ui/icon-input";
import { Textarea } from "@/shared/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { createPostAction } from "../../actions";
import { CreatePostInput, createPostSchema } from "../../schema";
import { Category } from "../../types";
import CategorySelectField from "./category-select-field";
import CreatePostActions from "./create-post-actions";

interface CreatePostFormProps {
  categories: Category[];
  onSuccess: () => void;
}

export default function CreatePostForm({
  categories,
  onSuccess,
}: CreatePostFormProps) {
  const form = useForm<CreatePostInput>({
    resolver: zodResolver(createPostSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = form;

  const onSubmit = async (data: CreatePostInput) => {
    const result = await createPostAction(data);

    if (!result.success) {
      const { non_field_errors, ...fieldErrors } = result.errors;
      for (const [field, messages] of Object.entries(fieldErrors)) {
        setError(field as keyof CreatePostInput, {
          message: messages.join(" "),
        });
      }
      if (non_field_errors?.length) {
        setError("root", { message: non_field_errors.join(" ") });
      }
      return;
    }

    form.reset();
    toast.success("پست با موفقیت ایجاد شد");
    onSuccess();
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
        dir="rtl"
      >
        <Field data-invalid={!!errors.title}>
          <FieldLabel htmlFor="title">عنوان بلاگ</FieldLabel>
          <IconInput
            {...register("title")}
            id="title"
            aria-invalid={!!errors.title}
            placeholder="مثال: راهنمای کامل خرید و سرمایه‌گذاری در ..."
            icon={<IconUserSquare className="size-5" />}
          />
          {errors.title && <FieldError errors={[errors.title]} />}
        </Field>

        <CategorySelectField categories={categories} />

        <Field data-invalid={!!errors.content}>
          <FieldLabel htmlFor="content">بدنه بلاگ</FieldLabel>
          <Textarea
            {...register("content")}
            id="content"
            aria-invalid={!!errors.content}
            placeholder="متن بدنه بلاگ خودرا بنویسید"
            rows={5}
            className="h-30 resize-none"
          />
          {errors.content && <FieldError errors={[errors.content]} />}
        </Field>

        {errors.root && (
          <p className="rounded-lg bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {errors.root.message}
          </p>
        )}

        <CreatePostActions />
      </form>
    </FormProvider>
  );
}
