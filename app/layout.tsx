import type { Metadata } from "next";
import "./global.css";
import Navbar from "@/components/Navbar";
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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
