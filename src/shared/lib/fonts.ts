import localFont from "next/font/local";

export const shabnamFont = localFont({
  variable: "--shabnam-font",
  display: "swap",
  src: [
    {
      path: "../../../public/fonts/shabnam/Shabnam.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/shabnam/Shabnam-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/shabnam/Shabnam-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
