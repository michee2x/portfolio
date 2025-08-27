import type { Metadata } from "next";
import "./globals.css";


import localFont from "next/font/local";
import { ReactNode } from "react";

const framerFontOne = localFont({
  src: [
    {path: "./fonts/0yFpglK3jVYQPMAavtrS0bTWcJs.woff",weight: "400",style: "normal"},
  ],
  variable: "--font-framer",
});

const framerFontTwo = localFont({
  src: [
    {path: "/fonts/1LfUFn9ktwe6Y6vHnbuhigjq9Dk.woff",weight: "400",style: "normal"},
  ],
  variable: "--font-framerSans",
});
const framerFontThree = localFont({
  src: [
    {path: "/fonts/1ZFS7N918ojhhd0nQWdj3jz4w.woff2",weight: "400",style: "normal"},
  ],
  variable: "--font-framer-Serif",
});

const framerFontFour = localFont({
  src: [
    {
      path: "/fonts/iXpaxEenVVRK6V44PcVbra2128.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-framer-Cursive",
});

const framerFontFive = localFont({
  src: [
    {
      path: "/fonts/KD28JKvy8FTDeIrVnk1MJ0tDXY.woff",
      weight: "400",
      style: "normal",
    },
  ],
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
        {children}
      </body>
    </html>
  );
}
