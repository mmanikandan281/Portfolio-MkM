import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Manikandan M | Developer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <Toaster />
      </body>
    </html>
  );
}
