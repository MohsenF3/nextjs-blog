export type ActionResult<T = void> =
  | { success: true; data: T }
  | { success: false; errors: Record<string, string[]> };
