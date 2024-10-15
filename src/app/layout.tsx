import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Sprintly",
  description: "Accelerate your projects, one sprint at a time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
