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
              <p className="text-xl mb-8 leading-relaxed">
                I&apos;m a full-stack engineer who transforms complex business
                challenges into elegant, scalable solutions. My approach
                combines technical excellence with strategic thinking,
                consistently delivering systems that drive measurable business
                impact — from reducing operational overhead by 70% to increasing
                user engagement by 25%.
              </p>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                  Problem-Solving Philosophy
                </h3>
                <p className="text-lg mb-4">
                  I believe the best engineering solutions emerge from deep
                  understanding of user needs and business goals. Whether
                  it&apos;s architecting real-time systems or optimizing
                  performance bottlenecks, I focus on creating lasting value
                  through thoughtful design and execution.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                  Impact-Driven Engineering
                </h3>
                <p className="text-lg mb-4">
                  Every line of code I write serves a purpose. I&apos;ve built
                  systems that handle millions of operations, standardized
                  architectures that improved team velocity by 30%, and created
                  user experiences that convert visitors into loyal customers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 border-l-4 border-orange-600">
                  <h4 className="font-bold text-lg mb-2">
                    System Architecture
                  </h4>
                  <p className="text-sm text-gray-600">
                    Designing scalable, maintainable solutions that grow with
                    business needs
                  </p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-orange-600">
                  <h4 className="font-bold text-lg mb-2">
                    Performance Optimization
                  </h4>
                  <p className="text-sm text-gray-600">
                    Turning slow, inefficient systems into lightning-fast user
                    experiences
                  </p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-orange-600">
                  <h4 className="font-bold text-lg mb-2">
                    Innovation Integration
                  </h4>
                  <p className="text-sm text-gray-600">
                    Leveraging cutting-edge technologies to solve real-world
                    challenges
                  </p>
                </div>
                <div className="bg-gray-50 p-6 border-l-4 border-orange-600">
                  <h4 className="font-bold text-lg mb-2">Team Enablement</h4>
                  <p className="text-sm text-gray-600">
                    Building tools and processes that amplify entire engineering
                    teams
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-lg font-medium text-orange-800">
                  &ldquo;Great engineering isn&apos;t just about writing code —
                  it&apos;s about understanding problems deeply, designing
                  solutions thoughtfully, and delivering results that
                  matter.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
