import { routes } from "@/config";
import { buildPageMetadata } from "@/shared/lib/seo";

export const blogMetadata = buildPageMetadata({
  title: "یادداشت‌ها و داستان‌ها",
  description:
    "مروری بر نوشته‌های ادبی، داستان‌های کوتاه، و تأملات فلسفی پیرامون زندگی، طبیعت، صلح و عشق.",
  path: routes.blog,
  keywords: [
    "مجله ادبی",
    "داستان و شعر",
    "فلسفه و زندگی",
    "دلنوشته",
    "طبیعت و آرامش",
  ],
});
