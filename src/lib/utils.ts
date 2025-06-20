import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "Portfolio | Ajmal Ali",
  description = "Ajmal Ali – Full-Stack Engineer. Explore projects in AI tools, scalable frontend architecture using React, Next.js, and Node.js.",
  image = "/assets/og-image.webp",
  icons = "/favicon.ico",
  keywords = [
    "Ajmal Ali",
    "Full-Stack Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Full-Stack Developer",
    "Software Engineer",
    "Frontend Engineer",
    "Next.js Portfolio",
    "JavaScript Engineer",
    "AI tools",
    "Admin Dashboard",
    "Zustand",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
    "React",
    "Next.js",
    "Portfolio",
    "Web Development",
  ],
  noIndex = false,
  canonical = "https://ajmalali.me",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  keywords?: string[];
  noIndex?: boolean;
  canonical?: string;
} = {}): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ajmalali.me";

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    icons,
    keywords,
    authors: [{ name: "Ajmal Ali", url: siteUrl }],
    creator: "Ajmal Ali",
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: "Ajmal Ali Portfolio",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Ajmal Ali Portfolio Preview",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    themeColor: "#ffffff",
    colorScheme: "light",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    alternates: {
      canonical,
    },
  };
}
