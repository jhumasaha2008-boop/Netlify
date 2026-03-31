import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coconut Milkshake | Pure Hydration",
  description: "High-end scrollytelling experience for premium coconut milkshakes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#FAF9F6] text-slate-900">
        {children}
      </body>
    </html>
  );
}
