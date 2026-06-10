import { tryCatch } from "@/shared/lib/try-catch";
import { getCategories } from "../../api";
import CreatePostDialog from "./create-post-dialog";

export default async function CreatePost() {
  const [categories, error] = await tryCatch(getCategories());

  if (error) return null;

  return <CreatePostDialog categories={categories} />;
}
