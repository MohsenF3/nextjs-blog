import { IconClock, IconEye, IconUser } from "@/shared/components/icons";
import { toJalali } from "@/shared/lib/formatDate";
import Image from "next/image";
import Link from "next/link";
import { Post } from "../types";
import BlogCardMask from "./blog-card-mask";

export default function BlogCard({
  image,
  title,
  created_datetime,
  category: { title: categoryTitle },
}: Post) {
  const formattedDate = toJalali(created_datetime);

  return (
    <article className="relative w-full h-60.75 md:h-81.5 overflow-visible">
      <div className="relative w-full h-60.75 md:h-81.5 p-2 md:p-3 ">
        <BlogCardMask />

        <div className="relative z-10 flex flex-col justify-between w-full h-full gap-2.5 overflow-hidden">
          <div className="relative w-full h-25 md:h-45 rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              loading="eager"
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />

            <span className="absolute top-3 left-3.25 w-19 md:w-20.25 px-2 py-1 bg-secondary rounded-sm text-center text-card text-[11px] md:text-xs">
              {categoryTitle}
            </span>
          </div>

          <h2 className="text-sm md:text-lg line-clamp-3 md:line-clamp-2">
            {title}
          </h2>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <IconClock />
              <span className="text-xs md:text-sm text-muted-foreground">
                {formattedDate}
              </span>
            </div>
            <div className="flex items-center max-sm:max-w-[40%] overflow-hidden gap-1">
              <IconUser />
              <span className="text-xs md:text-sm text-muted-foreground">
                تیم محتوای ما
              </span>
            </div>
          </div>
        </div>
      </div>

      <Link
        href="#"
        className="absolute bottom-0.5 flex items-center justify-center left-0 size-9 md:size-11 rounded-lg border border-border bg-card z-20"
      >
        <IconEye className="size-4 md:size-5" />
      </Link>
    </article>
  );
}
