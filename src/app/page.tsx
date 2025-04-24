import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Frontend Engineer",
    company: "MULTIPLY (by Pidilite)",
    location: "Bengaluru, India",
    period: "March 2023 - Present",
    highlights: [
      "Promoted from intern to full-time engineer in 6 months due to strong performance",
      "Enhanced pricing control with drag-and-drop sequencing (40% reduction in manual adjustments)",
      "Optimized front-end performance, reducing load times by 30% and increasing user retention by 15%",
      "Led technical deployment of cross-platform Flutter app (50% increase in user acquisition)",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Flutter",
      "Zustand",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="bottom-right" />
      <Navbar />
      <Hero />

      {/* Work Experience Highlight */}
      <section className="py-16 sm:py-20 md:py-24 bg-black text-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter leading-[1.1]">
              WORK <span className="text-orange-600">EXPERIENCE</span>
            </h2>
            <Link
              href="/works"
              className="mt-6 md:mt-0 inline-flex items-center text-orange-600 hover:text-orange-500 uppercase tracking-wider font-medium group relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-orange-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              <span>View all experience</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 group-hover:translate-x-1.5 transition-transform duration-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 sm:p-8 border-l-4 border-orange-600 mb-10 md:mb-12"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 md:mb-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    {exp.company} | {exp.location}
                  </p>
                  <span className="inline-block text-white bg-orange-600 px-3 sm:px-4 py-1.5 sm:py-2 text-sm mt-3 sm:mt-4 font-medium uppercase tracking-wider">
                    Promoted from Intern to Full-time Engineer
                  </span>
                </div>
                <span className="mt-4 md:mt-0 bg-zinc-800 text-white px-4 sm:px-5 py-2 sm:py-3 inline-block uppercase tracking-wider text-sm">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 ml-5 sm:ml-6 list-disc text-gray-300">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="pl-2">
                    <span className="text-white text-base sm:text-lg">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-white px-3 sm:px-4 py-1.5 sm:py-2 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/works"
              className="inline-block relative bg-orange-600 text-white hover:bg-orange-700 transition-all duration-300 px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg uppercase tracking-wider font-medium w-full sm:w-auto max-w-full shadow-[0_4px_0_rgb(194,65,12)] hover:shadow-[0_4px_0_rgb(154,52,18)] active:translate-y-1 active:shadow-[0_2px_0_rgb(154,52,18)] overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                See detailed experience & projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1.5 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-orange-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 -z-0"></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA - Visual separator */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-5 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6 sm:mb-8 leading-tight">
              Ready to <span className="text-orange-600">Collaborate</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
            <Link
              href="/contact"
              className="inline-block relative bg-black text-white hover:bg-orange-600 transition-all duration-300 px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg uppercase tracking-wider font-medium w-full sm:w-auto max-w-full shadow-[0_4px_0_rgb(0,0,0)] hover:shadow-[0_4px_0_rgb(234,88,12)] active:translate-y-1 active:shadow-[0_2px_0_rgb(234,88,12)] overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center">
                Get In Touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 group-hover:translate-x-1.5 transition-transform duration-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-orange-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 -z-0"></span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
