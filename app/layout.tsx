import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "GSForever — Guild Self-Found",
  description:
    "Guilde francophone Guild Self-Found sur World of Warcraft: Forever.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
