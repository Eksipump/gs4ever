import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "GSForever — Guild Self-Found",
  description: "Guilde francophone GSF sur World of Warcraft: Forever.",
  robots: {
    index: false,
    follow: false,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
