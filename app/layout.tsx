import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Xylen Lab - Creative Marketing & Audiovisual Production",
  description:
    "Professional social media management, web development, and audiovisual production services. Elevate your brand with Xylen Lab.",
  keywords:
    "marketing, audiovisual production, social media management, web development, video production, presentation design",
  authors: [{ name: "Xylen Lab" }],
  openGraph: {
    title: "Xylen Lab - Creative Marketing & Audiovisual Production",
    description: "Professional social media management, web development, and audiovisual production services.",
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
