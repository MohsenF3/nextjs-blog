"use client";

import { cn } from "@/shared/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createPostAction } from "../../actions";
import { CreatePostInput, createPostSchema } from "../../schema";
import { Category } from "../../types";

export default function CreatePostForm({
  categories,
  onSuccess,
  onCancel,
}: {
  categories: Category[];
  onSuccess: () => void;
  onCancel: () => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<CreatePostInput>({
    resolver: zodResolver(createPostSchema),
  });

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

    reset();
    onSuccess();
  };

  const fieldClass = (hasError: boolean) =>
    cn(
      "w-full rounded-lg border px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-4",
      hasError
        ? "border-red-500 focus:ring-red-200"
        : "border-zinc-200 focus:ring-zinc-100",
    );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" dir="rtl">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-700">عنوان بلاگ</label>
        <input
          {...register("title")}
          placeholder="مثال: راهنمای کامل خرید و سرمایه‌گذاری در ..."
          className={fieldClass(!!errors.title)}
        />
        {errors.title && (
          <p className="text-xs text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-700">دسته بندی</label>
        <select
          {...register("category", { valueAsNumber: true })}
          className={fieldClass(!!errors.category)}
        >
          <option value="">دسته بندی</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.title}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-xs text-red-500">{errors.category.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-zinc-700">بدنه بلاگ</label>
        <textarea
          {...register("content")}
          placeholder="متن بدنه بلاگ خودرا بنویسید"
          rows={5}
          className={fieldClass(!!errors.content)}
        />
        {errors.content && (
          <p className="text-xs text-red-500">{errors.content.message}</p>
        )}
      </div>

      {errors.root && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
          {errors.root.message}
        </p>
      )}

      <div className="flex items-center gap-2 border-t border-zinc-200 pt-4 md:pt-5">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg w-full border border-zinc-200 bg-zinc-100 px-4 py-2.5 text-sm font-medium leading-5 text-zinc-700 shadow-xs hover:bg-zinc-200 hover:text-zinc-900 focus:outline-none focus:ring-4 focus:ring-zinc-100"
        >
          انصراف
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-lg w-full border border-transparent bg-zinc-900 px-4 py-2.5 text-sm font-medium leading-5 text-white shadow-xs hover:bg-zinc-700 focus:outline-none focus:ring-4 focus:ring-zinc-300 disabled:opacity-50"
        >
          {isSubmitting ? "در حال ارسال..." : "ثبت و انتشار بلاگ"}
        </button>
      </div>
    </form>
  );
}
