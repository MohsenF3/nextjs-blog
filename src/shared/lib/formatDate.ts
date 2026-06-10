export const toJalali = (isoString: string): string => {
  if (!isoString) return "—";

  // Slice date part directly — avoids UTC conversion drift
  const datePart = isoString.slice(0, 10); // "2026-06-08"
  const [year, month, day] = datePart.split("-").map(Number);

  // Use a neutral UTC date to avoid any timezone shifting
  const date = new Date(Date.UTC(year, month - 1, day));

  return date.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "UTC",
  });
};
