import { IconUser } from "@/shared/components/icons";
import Image from "next/image";
import { Post } from "../types";

export default function FeaturedBlogCard({
  image,
  title,
  content,
  category: { title: categoryTitle },
}: Post) {
  return (
    <article className="flex gap-2 sm:gap-3 rounded-xl border bg-card p-2 sm:p-3">
      <div className="flex flex-col justify-between gap-1 w-1/2">
        <span className="w-full text-center bg-accent rounded py-2 px-8 text-sm">
          جدیدترین
        </span>

        <div className=" flex flex-col gap-2">
          <h2 className="text-[13px] sm:text-lg line-clamp-2! leading-[170%]">
            {title}
          </h2>
          <p className="hidden sm:line-clamp-3 text-muted-foreground leading-[160%]">
            {content}
          </p>
        </div>

        <div className="flex items-center gap-[5.96px] sm:gap-5">
          <IconUser className="size-[23.8] sm:size-12" />
          <span className="text-[6.95px] sm:text-sm text-muted-foreground">
            تیم محتوای ما
          </span>
        </div>
      </div>

      <div className="relative w-1/2 rounded-lg h-28.5 sm:h-75 overflow-hidden mb-1">
        <Image
          src={image}
          alt={title}
          fill
          loading="eager"
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <span className="hidden sm:block absolute right-3 top-4 bg-secondary rounded py-1 px-2 min-w-10 text-center text-sm text-background">
          {categoryTitle}
        </span>
      </div>
    </article>
  );
}
