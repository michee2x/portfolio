import type { Metadata } from "next";
import "./globals.css";


import localFont from "next/font/local";
import { ReactNode } from "react";
import { Providers } from "./Providers";

const framerFontOne = localFont({
  src: "./fonts/0yFpglK3jVYQPMAavtrS0bTWcJs.woff",
  weight: "400",
  style: "normal",
  variable: "--font-framer",
});

const framerFontTwo = localFont({
  src: "./fonts/1LfUFn9ktwe6Y6vHnbuhigjq9Dk.woff",
  weight: "400",
  style: "normal",
  variable: "--font-framerSans",
});
const framerFontThree = localFont({
  src: "./fonts/1ZFS7N918ojhhd0nQWdj3jz4w.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-framer-Serif",
});

const framerFontFour = localFont({
  src: "./fonts/iXpaxEenVVRK6V44PcVbra2128.woff",
  weight: "400",
  style: "normal",
  variable: "--font-framer-Cursive",
});

const framerFontFive = localFont({
  src: "./fonts/KD28JKvy8FTDeIrVnk1MJ0tDXY.woff",
  weight: "400",
  style: "normal",
  variable: "--font-framer-Mono",
});

export const metadata: Metadata = {
  title: "Metryx",
  description: "Get to know me",
};

export default function RootLayout({
  children,
}: {children:ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${framerFontOne.variable} ${framerFontTwo.variable} ${framerFontThree.variable} ${framerFontFour.variable} ${framerFontFive.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
