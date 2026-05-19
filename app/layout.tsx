import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jhan Pauline C. Tan | Administrative & Accounting Support Portfolio",
  description:
    "Portfolio of Jhan Pauline C. Tan, an administrative and accounting support professional experienced in bookkeeping, document control, audit support, customer service, and office operations.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Jhan Pauline C. Tan | Administrative & Accounting Support Portfolio",
    description:
      "Portfolio of Jhan Pauline C. Tan, an administrative and accounting support professional experienced in bookkeeping, document control, audit support, customer service, and office operations.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
