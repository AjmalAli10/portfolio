import { Metadata } from "next";

export function constructMetadata({
  title = "Ajmal Ali | Frontend Engineer | Developer | Software Engineer | Portfolio",
  description = "Explore Ajmal's portfolio showcasing expertise in frontend development, React, Next.js, web design, Flutter, React Native ,UI/UX design, and performance optimization. Discover innovative, responsive web applications that enhance user engagement and drive conversions.",
  image = "/assets/profile-pic.jpeg",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      url: "https://www.ajmalali.me/",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@softEng_ajmal",
    },
    icons,
    metadataBase: new URL("https://www.ajmalali.me/"),
  };
}
