import { IconHome } from "./icons";

export type RouteConfig = {
  label: string;
  icon?: React.ComponentType<React.ComponentProps<"svg">>;
};

export const routeConfig: Record<string, RouteConfig> = {
  "": { label: "خانه", icon: IconHome }, // root/home
  blog: { label: "مجله" },
};
