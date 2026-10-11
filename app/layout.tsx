
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ema Špiliauskaitė | Portfolio",
  description: "Ema Špiliauskaitės asmeninė svetainė ir portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt">
      <body>{children}</body>
    </html>
  );
}
