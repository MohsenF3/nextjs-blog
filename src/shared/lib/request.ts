import { env } from "@/config";

function buildApiUrl(
  path: string,
  params?: Record<string, string | undefined>,
) {
  const url = new URL(path, env.API_URL);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) url.searchParams.set(key, value);
    }
  }

  return url;
}

export async function apiGet<T>(
  path: string,
  params?: Record<string, string | undefined>,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(buildApiUrl(path, params), {
    credentials: "include",
    cache: "no-store",
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
