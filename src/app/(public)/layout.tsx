import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Novelty Lab",
  description: "AI-powered software and strategy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${notoSans.className} font-sans antialiased bg-[#0f1115]`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
