import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Mukarram Asad — Frontend-Focused Full Stack Developer",
  description:
    "Frontend-focused full stack developer. Pixel-perfect web products, production debugging, and MVPs that ship — including bank-live personal finance apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={sans.variable}>
      <body className={sans.className}>{children}</body>
    </html>
  );
}
