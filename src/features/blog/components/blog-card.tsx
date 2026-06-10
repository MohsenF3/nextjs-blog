import { toJalali } from "@/shared/lib/formatDate";
import Image from "next/image";
import { Post } from "../types";

export default function BlogCard({
  image,
  title,
  content,
  created_datetime,
  category: { title: categoryTitle },
}: Post) {
  const formattedDate = toJalali(created_datetime);

  return (
    <article className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300  hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col p-5">
        <span className="mb-3 w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {categoryTitle}
        </span>

        <h2 className="mb-3 line-clamp-2 text-lg font-semibold leading-7 text-gray-900">
          {title}
        </h2>

        <p className="line-clamp-3 text-sm leading-6 text-gray-600">
          {content}
        </p>

        <div className="mt-5 border-t border-gray-100 pt-4">
          {formattedDate}
        </div>
      </div>
    </article>
  );
}
