import { routes } from "@/config";
import { redirect } from "next/navigation";

export default function Home() {
  redirect(routes.blog.list);
}
