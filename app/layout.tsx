import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M&M Bridge",
  description: "We're a passionate community dedicated to bridge the gap between the professional and those eager to learn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
