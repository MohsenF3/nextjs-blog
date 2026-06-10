"use server";

import { routes } from "@/config";
import { ApiError, apiPost } from "@/shared/lib/request";
import { tryCatch } from "@/shared/lib/try-catch";
import { ActionResult } from "@/shared/types";
import { revalidatePath } from "next/cache";
import { CreatePostInput } from "./schema";

export async function createPostAction(
  data: CreatePostInput,
): Promise<ActionResult> {
  const [, error] = await tryCatch(apiPost("/blog/blog/", data));

  if (error) {
    if (error instanceof ApiError && error.status === 400) {
      return { success: false, errors: error.data };
    }
    return {
      success: false,
      errors: { non_field_errors: ["خطایی رخ داده است"] },
    };
  }

  revalidatePath(routes.blog.list);

  return { success: true, data: undefined };
}
