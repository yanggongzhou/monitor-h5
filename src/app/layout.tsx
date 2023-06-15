import './globals.css'
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: '欢迎来到德莱联盟',
  keywords: "模版集成",
  description: '模版集成',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
