import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OptiFlow AI",
  description: "Automatiseer repetitief werk met AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
