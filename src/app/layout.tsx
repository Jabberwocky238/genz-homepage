import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import RootLayout from '../components/RootLayout'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GenZ职业规划 - 为00后/95后打造的生涯导航",
  description: "用AI测评、职业地图与可落地的学习路径，帮你更快找到热爱与收入的平衡点。",
  keywords: "职业规划,AI测评,职业发展,GenZ,00后,95后,职业咨询",
  authors: [{ name: "GenZ Career Path Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  );
}
