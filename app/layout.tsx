import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Provider";

export const metadata: Metadata = {
  title: "DroneWeb",
  description: "DroneWeb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scrollbar-none">
      <body className="antialiased mt-15">
        <Providers>
          {children}
        </Providers>
      </body>
    </html >
  );
}
