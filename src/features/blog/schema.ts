import z from "zod";

export const blogSearchParamsSchema = z.object({
  search: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
  page: z.coerce.number().int().positive().default(1),
});

export type BlogSearchParams = z.infer<typeof blogSearchParamsSchema>;

export const createPostSchema = z.object({
  category: z.number({ error: "دسته بندی الزامی است" }),
  title: z.string().min(1, "عنوان الزامی است"),
  content: z.string().min(1, "محتوا الزامی است"),
});

export type CreatePostInput = z.infer<typeof createPostSchema>;
