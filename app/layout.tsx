import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import NavigationBar from "./components/NavigationBar";
import PageTransition from "./components/PageTransition";
import StairTransition from "./components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Izhrmn.",
  description: "Luthfi Izhariman personal website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <NavigationBar></NavigationBar>
        <StairTransition></StairTransition>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
