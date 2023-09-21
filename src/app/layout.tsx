import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const jetbrains = localFont({
  src: [
    {
      path: "../../public/fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/JetBrainsMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--jetbrains",
});

const karla = localFont({
  src: [
    {
      path: "../../public/fonts/Karla-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--karla",
});

export const metadata: Metadata = {
  title: "Caracal Agency",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${karla.variable} ${jetbrains.variable} font-karla`}>
        {children}
      </body>
    </html>
  );
}