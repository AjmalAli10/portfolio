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
  const fullImageUrl = new URL(image, "https://www.ajmalali.me").toString();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ajmal Ali",
    jobTitle: "Frontend Engineer | Developer | Software Engineer",
    url: "https://www.ajmalali.me/",
    image: fullImageUrl,
    sameAs: [
      "https://twitter.com/softEng_ajmal",
      "https://www.linkedin.com/in/ajmal-ali10",
    ],
  };
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: fullImageUrl,
        },
      ],
      url: "https://www.ajmalali.me",
      type: "website",
      siteName:
        "Ajmal Ali | Frontend Engineer | Software Engineer | Developer | Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
      creator: "@softEng_ajmal",
    },
    icons: {
      icon: icons,
    },
    metadataBase: new URL("https://www.ajmalali.me/"),
    alternates: {
      types: {
        "application/ld+json": JSON.stringify(jsonLd),
      },
    },
  };
}
