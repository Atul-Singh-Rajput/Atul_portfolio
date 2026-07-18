import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atul Singh — AI/GenAI Engineer",
  description:
    "AI/GenAI Engineer with expertise in LLMs, RAG pipelines, LangChain, Azure OpenAI, and agentic AI systems. Currently at LTIMindtree building enterprise Generative AI solutions.",
  keywords: [
    "AI Engineer",
    "GenAI Engineer",
    "LangChain",
    "RAG Pipeline",
    "Azure OpenAI",
    "GPT-4o",
    "LLM Engineer",
    "Python",
    "FastAPI",
    "Atul Singh",
    "LTIMindtree",
    "Prompt Engineering",
  ],
  authors: [{ name: "Atul Singh", url: "https://github.com/Atul-Singh-Rajput" }],
  creator: "Atul Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Atul Singh — AI/GenAI Engineer",
    description:
      "Building enterprise-grade Generative AI solutions with LLMs, RAG pipelines, and agentic AI workflows.",
    siteName: "Atul Singh Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Atul Singh — AI/GenAI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atul Singh — AI/GenAI Engineer",
    description:
      "Building enterprise-grade Generative AI solutions with LLMs, RAG pipelines, and agentic AI workflows.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#080808" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Atul Singh",
              jobTitle: "AI/GenAI Engineer",
              worksFor: {
                "@type": "Organization",
                name: "LTIMindtree",
              },
              url: "https://atulsingh.dev",
              email: "atulsinghmysore@gmail.com",
              sameAs: [
                "https://github.com/Atul-Singh-Rajput",
                "https://linkedin.com/in/atul-singh-rajput",
              ],
              knowsAbout: [
                "Generative AI",
                "Large Language Models",
                "RAG Pipelines",
                "LangChain",
                "Azure OpenAI",
                "Python",
                "FastAPI",
              ],
            }),
          }}
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
