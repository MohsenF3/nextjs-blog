import { routes, SITE_URL } from "@/config";
import type { Metadata } from "next";

const DEFAULT_TITLE = "آوای اندیشه | مجله ادبی، فلسفی و سبک زندگی";
const SITE_SHORT_TITLE = "آوای اندیشه";
const DEFAULT_DESCRIPTION =
  "مجموعه‌ای خواندنی از مقالات، داستان‌ها و دلنوشته‌هایی با محوریت صلح، دلدادگی، طبیعت، فلسفه و زیبایی‌های زندگی.";
const DEFAULT_OG_IMAGE = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "آوای اندیشه - مجله‌ای برای روح و روان",
};

// Type Definitions
export type OgImageDescriptor = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

export type BuildMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: OgImageDescriptor;
  noIndex?: boolean;
};

// Helper to convert relative paths to absolute URLs securely
const absoluteUrl = (pathOrUrl?: string) => {
  if (!pathOrUrl) return SITE_URL;
  try {
    return new URL(pathOrUrl, SITE_URL).toString();
  } catch {
    return SITE_URL;
  }
};

// Normalize image dimensions with global app defaults
const normalizeImage = (image?: OgImageDescriptor) => {
  const img = image ?? DEFAULT_OG_IMAGE;
  return {
    url: absoluteUrl(img.url),
    width: img.width ?? DEFAULT_OG_IMAGE.width,
    height: img.height ?? DEFAULT_OG_IMAGE.height,
    alt: img.alt ?? DEFAULT_OG_IMAGE.alt,
  };
};

// Format and normalize the canonical path structure
const buildCanonical = (path?: string) => {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
};

// Global Base Root Metadata Configuration
export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_SHORT_TITLE}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "شعر و ادبیات",
    "فلسفه و زندگی",
    "صلح و دوستی",
    "دلدادگی و عشق",
    "طبیعت و کوهستان",
    "سلامت و پزشکی",
    "داستان کوتاه",
    "مجله فرهنگی",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: SITE_URL,
    siteName: SITE_SHORT_TITLE,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [normalizeImage()],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [absoluteUrl(DEFAULT_OG_IMAGE.url)],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "literature",
};

// Standard Page Metadata Builder Generates custom, unique metadata for basic static paths
export const buildPageMetadata = ({
  title,
  description,
  path,
  keywords,
  image,
  noIndex,
}: BuildMetadataOptions): Metadata => {
  const metaDescription = description ?? DEFAULT_DESCRIPTION;
  const canonicalPath = buildCanonical(path);
  const ogImage = normalizeImage(image);
  const absoluteCanonical = absoluteUrl(canonicalPath);

  const metadata: Metadata = {
    title,
    description: metaDescription,
    keywords,
    alternates: {
      canonical: routes.blog,
    },
    openGraph: {
      type: "website",
      siteName: SITE_SHORT_TITLE,
      title: `${title} | ${SITE_SHORT_TITLE}`,
      description: metaDescription,
      url: absoluteCanonical,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_SHORT_TITLE}`,
      description: metaDescription,
      images: [ogImage.url],
    },
  };

  if (typeof noIndex === "boolean") {
    metadata.robots = {
      index: !noIndex,
      follow: !noIndex,
    };
  }

  return metadata;
};
