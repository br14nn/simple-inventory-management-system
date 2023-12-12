import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

import MyNavbar from "@/components/MyComponents/MyNavbar";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inventory Management System",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${firaCode.className} h-[100svh] bg-background`}>
        <MyNavbar />

        {children}
      </body>
    </html>
  );
}
