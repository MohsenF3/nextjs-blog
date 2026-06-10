import z from "zod";

export const blogSearchParamsSchema = z.object({
  search: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
  page: z.coerce.number().int().positive().default(1),
});

export type BlogSearchParams = z.infer<typeof blogSearchParamsSchema>;
