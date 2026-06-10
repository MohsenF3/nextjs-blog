import { apiGet } from "@/shared/lib/request";
import { cache } from "react";
import { BlogSearchParams } from "./schema";
import { CategoriesResponse, PostsResponse } from "./types";

export const getPosts = async (
  query: BlogSearchParams,
): Promise<PostsResponse> => apiGet("/blog/blogs", query);

export const getCategories = cache(
  async (): Promise<CategoriesResponse> => apiGet("/blog/blog-categories"),
);
