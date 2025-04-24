import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="bottom-right" />
      <Navbar />

      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-12">
            ABOUT <span className="text-orange-600">ME</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Image
                src="/assets/profile-hero-image.webp"
                alt="Ajmal Ali"
                width={500}
                height={600}
                className="w-full object-cover border-4 border-orange-600"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xl mb-6">
                As a dedicated Frontend Engineer, I&apos;ve a passion for
                crafting visually appealing and high-performance web
                applications. With hands-on experience in technologies like
                React, Next.js, and Tailwind CSS, I specialize in building
                responsive, user-focused solutions that make a lasting impact.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">
                  Technical Excellence
                </h3>
                <p>
                  Committed to writing clean, maintainable code and staying
                  current with the latest web technologies.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2">
                  Innovation Driven
                </h3>
                <p>
                  Always exploring new ways to push the boundaries of web
                  development and create exceptional user experiences.
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-orange-600 text-xl">⋆</span>
                  <span className="font-medium">
                    1.6+ years of experience in frontend development
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600 text-xl">⋆</span>
                  <span className="font-medium">
                    Proficient in React.js, Next.js, and Tailwind CSS
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600 text-xl">⋆</span>
                  <span className="font-medium">
                    Developed and optimized e-commerce and SaaS applications
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600 text-xl">⋆</span>
                  <span className="font-medium">
                    Integrated payment solutions with Stripe API
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-600 text-xl">⋆</span>
                  <span className="font-medium">
                    Hands-on experience with Strapi CMS and Prisma ORM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
