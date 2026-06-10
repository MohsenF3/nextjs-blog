import localFont from "next/font/local";

export const yekanFont = localFont({
  variable: "--yekan-font",
  display: "swap",
  src: [
    {
      path: "../../../public/fonts/yekan/BYekan.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/yekan/BYekan-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
``;
