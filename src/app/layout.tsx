import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";

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
    <html lang="en">
      <body className={`${notoSans.className} font-sans antialiased`}>
        <AnimatedBackground>{children}</AnimatedBackground>
      </body>
    </html>
  );
}
