import "./globals.css";

import { constructMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { geistMono, geistSans } from "./fonts/fonts";

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("antialiased", geistSans.variable, geistMono.variable)}
      >
        {children}
      </body>
    </html>
  );
}
