function buildApiUrl(
  path: string,
  params?: Record<string, string | number | undefined>,
) {
  const url = new URL(path, process.env.API_URL);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) url.searchParams.set(key, String(value));
    }
  }

  return url;
}

export async function apiGet<T>(
  path: string,
  params?: Record<string, string | number | undefined>,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(buildApiUrl(path, params), options);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export class ApiError extends Error {
  constructor(
    public status: number,
    public data: Record<string, string[]>,
  ) {
    super(`Request failed: ${status}`);
  }
}

export async function apiPost<T>(
  path: string,
  body: unknown,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(buildApiUrl(path), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...((options?.headers as Record<string, string>) ?? {}),
    },
    body: JSON.stringify(body),
    ...options,
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new ApiError(response.status, data);
  }

  // 204 or empty body — nothing to parse
  const text = await response.text();
  return (text ? JSON.parse(text) : null) as T;
}
