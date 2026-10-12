import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Footer } from "@/components/common/Footer";

import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://craft.vercel.app"),

  title: {
    default: "Craft — Stop Setting Up. Start Building.",
    template: "%s | Craft",
  },

  description:
    "Craft is an open-source TypeScript CLI that scaffolds web projects and configures development tools. Spend less time on boilerplate and more time building.",

  applicationName: "Craft",

  authors: [
    {
      name: "Mohan S P",
      url: "https://github.com/igmoni",
    },
  ],

  creator: "Mohan S P",

  openGraph: {
    type: "website",
    title: "Craft — Stop Setting Up. Start Building.",
    description:
      "Your stack. Your workflow. Less repetitive setup. Scaffold your next web project with Craft.",
    siteName: "Craft",
    url: "https://craft.vercel.app",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Craft — Stop Setting Up. Start Building.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Craft — Stop Setting Up. Start Building.",
    description:
      "A CLI for scaffolding web projects and automating repetitive setup.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
