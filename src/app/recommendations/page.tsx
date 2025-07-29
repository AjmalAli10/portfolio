import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RecommendationsGallery from "@/components/RecommendationsGallery";
import { Metadata } from "next";

const cards = [
  {
    image: "/assets/appreciation-images/recommendation-1.webp",
    quote: '"Ajmal has deep understanding of core web concepts."',
    source: "Slack",
    label: "From Manager",
  },
  {
    image: "/assets/appreciation-images/recommendation-2.webp",
    quote:
      '"Delivered above and beyond expectations and always willing to help."',
    source: "Slack",
    label: "From Product",
  },
  {
    image: "/assets/appreciation-images/recommendation-3.webp",
    quote:
      '"Ajmal is a fantastic collaborator! Willing to help and is a great team player."',
    source: "Slack",
    label: "From Manager",
  },
  {
    image: "/assets/appreciation-images/recommendation-4.webp",
    quote: '"Great attention to detail and code quality."',
    source: "Slack",
    label: "From Manager",
  },
  {
    image: "/assets/appreciation-images/recommendation-5.webp",
    quote:
      '"Tremendous job done by Ajmal and making changes at superfast speed."',
    source: "Slack",
    label: "From Manager",
  },
];

export const metadata: Metadata = {
  title: "Recommendations & Appreciation | Ajmal Ali",
  description:
    "Professional endorsements and heartfelt messages from colleagues who appreciate working together",
  openGraph: {
    title: "Recommendations & Appreciation | Ajmal Ali",
    description:
      "Professional endorsements and heartfelt messages from colleagues who appreciate working together",
  },
};

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="bottom-right" />
      <Navbar />

      {/* Recommendations Section */}
      <section className="pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-28 relative">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter mb-12 sm:mb-16 md:mb-20 lg:mb-24 leading-[1.1] text-center">
            RECOMMENDATIONS &{" "}
            <span className="text-orange-600">APPRECIATION</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Professional endorsements and heartfelt messages from colleagues who
            appreciate working together
          </p>

          <div className="flex justify-center">
            <RecommendationsGallery cards={cards} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
