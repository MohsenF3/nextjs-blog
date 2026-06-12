import { Toaster } from "@/shared/components/ui/sonner";
import { shabnamFont } from "@/shared/lib/fonts";
import { rootMetadata } from "@/shared/lib/seo";
import "./globals.css";

export const metadata = rootMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`h-full antialiased ${shabnamFont.className}`}
    >
      <body className="min-h-full flex flex-col">
        <Toaster dir="rtl" richColors position="top-right" />
        <main>{children}</main>
      </body>
    </html>
  );
}
