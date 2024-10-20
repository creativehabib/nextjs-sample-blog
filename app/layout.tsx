import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import SiteConfig from "../config/site";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "@/components/ThemeProvider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: SiteConfig.title,
  description: SiteConfig.description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background/40 font-sans antialiased", fontSans.variable)} suppressHydrationWarning={true}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <NavBar/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
