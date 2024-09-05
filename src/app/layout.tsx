import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppInitializer from "../store/AppInitializer";

import RootStyleRegistry from "../emotion/emotion-root-style-registry";
import SimpleStore from "../utils/SimpleStore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

  const data = SimpleStore.get("launchData");

  return (
    <html lang="en">
      <body className={inter.className}>
        <RootStyleRegistry>
          <AppInitializer user={data}>{children}</AppInitializer>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
