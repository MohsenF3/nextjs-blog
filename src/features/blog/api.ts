"use server";

import { apiGet } from "@/shared/lib/request";
import { PostsResponse } from "./types";

export const getPosts = async (): Promise<PostsResponse> =>
  apiGet("/blog/blogs");
