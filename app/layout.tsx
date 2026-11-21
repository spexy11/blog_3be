import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Mon app",
  description: "Description",
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
