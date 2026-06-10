import z from "zod";

export const blogSearchParamsSchema = z.object({
  search: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
});

export type BlogSearchParams = z.infer<typeof blogSearchParamsSchema>;
