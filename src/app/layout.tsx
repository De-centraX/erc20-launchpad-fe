import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import ClientHeader from "@/components/ClientHeader";

export const metadata: Metadata = {
  title: "Hyped Launch",
  description: "Token Launchpad on Hyperliquid",
  icons: {
    icon: "/hllogo.svg",
    shortcut: "/hllogo.svg",
    apple: "/hllogo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-charcoal text-light min-h-screen">
        <Providers>
          <ClientHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
