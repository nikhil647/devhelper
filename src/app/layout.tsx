"use client";

import type { Metadata } from "next";]
import StyledComponentsRegistry from "../lib/AntdRegistry";
import Navbar from "@/Component/Navbar/Page";
import { NextAuthProvider } from "./Provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create DSA Programs",
  description: "designed by fire benders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </NextAuthProvider>
      </body>
    </html>
  );
}
