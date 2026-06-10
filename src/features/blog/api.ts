"use server";

import { apiGet } from "@/shared/lib/request";
import { BlogSearchParams } from "./schema";
import { PostsResponse } from "./types";

export const getPosts = async (
  query: BlogSearchParams,
): Promise<PostsResponse> => apiGet("/blog/blogs", query);
