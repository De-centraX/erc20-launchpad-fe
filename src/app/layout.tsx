import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import ClientHeader from "@/components/ClientHeader";

export const metadata: Metadata = {
  title: "Magma Launchpad",
  description: "Token Launchpad on Core",
  icons: {
    icon: "/Molten Logo.svg",
    shortcut: "/Molten Logo.svg",
    apple: "/Molten Logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-gray-900">
        <Providers>
          <ClientHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
