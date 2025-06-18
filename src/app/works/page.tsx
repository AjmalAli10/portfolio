import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";

interface Achievement {
  highlight: string;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  location?: string;
  period: string;
  achievements: Achievement[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    title: "Frontend Engineer",
    company: "MULTIPLY (by Pidilite)",
    location: "Bengaluru, India",
    period: "March 2023 - Present",
    achievements: [
      {
        highlight: "Career Growth",
        description:
          "Started as an intern and quickly progressed to Frontend Engineer within 6 months due to strong performance and technical contributions, then evolved into Full-Stack Engineer role, mastering both frontend and backend technologies.",
      },
      {
        highlight: "Enhanced pricing control",
        description:
          "by developing a drag-and-drop sequencing feature using Zustand for efficient state management, reducing manual adjustments by 40%.",
      },
      {
        highlight: "Optimized front-end performance",
        description:
          "by implementing lazy loading, image compression, and caching strategies, reducing page load times by 30%, increasing user retention by 15%, and boosting overall website traffic by 25%.",
      },
      {
        highlight: "Implemented an admin-controlled",
        description:
          "image moderation system with Server Sent Event for real-time updates, reducing redundant content by 70% and improving content accuracy.",
      },
      {
        highlight: "Incorporated CleverTap analytics",
        description:
          "resulting in a 20% increase in user engagement and a 10% improvement in retention over three months by tracking user behavior patterns.",
      },
      {
        highlight: "Integrated an ML-powered image moderation API",
        description:
          "filtering out invalid or non-human faces in the feed discovery feature, enhancing feed quality.",
      },
      {
        highlight: "Designed and implemented a config-driven API",
        description:
          "improving flexibility for dynamic UI updates and reducing hard-coded logic in the codebase, improving scalability.",
      },
      {
        highlight: "Standardized modular UI components",
        description:
          "reducing development time by 30% and improving code maintainability, contributing to a 25% increase in team efficiency.",
      },
      {
        highlight:
          "Led the technical deployment of a cross-platform mobile app using Flutter",
        description:
          "achieving a 50% increase in user acquisition within the first month by ensuring optimal performance and UI consistency.",
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "HTML5",
      "CSS",
      "SCSS",
      "Tailwind CSS",
      "PWA",
      "Strapi CMS",
      "Flutter",
      "REST APIs",
      "Zustand",
      "CleverTap",
    ],
  },
];

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  hasLoginCredentials?: boolean;
  loginNumber?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Colex - Legal Tech Platform",
    description:
      "A comprehensive legal research platform built for law students and lawyers. Features case folder management, document uploads, AI-powered chat assistant, and context-aware research tools. The platform allows users to create case folders, upload PDFs, write research notes, and get intelligent assistance from an AI that understands the context of their work.",
    image: "/assets/project-thumbnail/legal-case-law-thumnail.png",
    tags: [
      "Next.js",
      "React",
      "Zustand",
      "Tailwind CSS",
      "Material UI",
      "Tanstack Query",
    ],
    liveUrl: "https://dev.getcolex.com/",
    githubUrl: "https://github.com/AjmalAli10/legal-tech-ai",
    hasLoginCredentials: true,
    loginNumber: "7003900023",
  },
  {
    id: 2,
    title: "CaseShop - Create Your Own Phone Case",
    description:
      "A Next.js e-commerce platform where users can design and order custom phone cases. Features include product customization, user authentication, shopping cart functionality, and secure checkout with Stripe integration.",
    image: "/assets/project-thumbnail/caseshop-thumbnail.png",
    tags: ["Next.js", "PostgresSQL", "Stripe", "Tailwind CSS", "Prisma ORM"],
    liveUrl: "https://case-shop-rouge.vercel.app/",
    githubUrl: "https://github.com/AjmalAli10/case-shop",
  },
  {
    id: 3,
    title: "QKart - E-commerce",
    description:
      "A full-stack e-commerce application built with the MERN stack that offers product browsing, user authentication, cart management, and order processing. Implemented responsive design and optimized for performance across devices.",
    image: "/assets/project-thumbnail/qkart-thumbnail.png",
    tags: ["React", "Express", "MongoDB"],
    liveUrl: "https://qkart-frontend-ajmal.netlify.app/",
    githubUrl: "https://github.com/AjmalAli10/Qkart",
  },
  {
    id: 4,
    title: "XBoard - News Aggregator",
    description:
      "A dynamic news aggregator that fetches and displays the latest articles from various sources using the Flipboard API. Features include categorized news feeds, article previews, and a responsive layout for optimal viewing on any device.",
    image: "/assets/project-thumbnail/xboard-thumbnail.png",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://xboard-news-ajmal.netlify.app/",
    githubUrl: "https://github.com/AjmalAli10/XBOARD_NEWS_AGGREGATOR",
  },
];

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="bottom-right" />
      <Navbar />

      {/* Experience Section */}
      <section className="pt-24 sm:pt-28 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-28 relative">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter mb-12 sm:mb-16 md:mb-20 lg:mb-24 leading-[1.1]">
            WORK <span className="text-orange-600">EXPERIENCE</span>
          </h1>

          {experiences.map((experience, index) => (
            <div key={index} className="mb-16 sm:mb-20 md:mb-24 lg:mb-32">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight">
                    {experience.title}
                  </h2>
                  <h3 className="text-lg sm:text-xl lg:text-2xl text-gray-700 mt-2 md:mt-3">
                    {experience.company} | {experience.location}
                  </h3>
                  <div
                    className="bg-orange-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-sm inline-block 
                  mt-3 sm:mt-4 md:mt-5 font-medium uppercase tracking-wider"
                  >
                    Promoted from Intern to Full-time Engineer
                  </div>
                </div>
                <span
                  style={{
                    width: "fit-content",
                  }}
                  className="inline-block bg-black text-white px-4 sm:px-6 py-2 sm:py-3 mt-4 md:mt-0 font-medium uppercase tracking-wider text-sm"
                >
                  {experience.period}
                </span>
              </div>

              <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 space-y-4 sm:space-y-6 md:space-y-8 border-l-4 border-orange-600">
                {experience.achievements.map((achievement, i) => (
                  <div key={i} className="pl-5 sm:pl-8 md:pl-10 py-2 md:py-3">
                    <p className="text-base sm:text-base md:text-lg">
                      <span className="font-bold text-orange-600">
                        {achievement.highlight}
                      </span>{" "}
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-black px-3 sm:px-4 py-1.5 sm:py-2 text-sm uppercase tracking-wide hover:bg-black hover:text-white transition-colors touch-manipulation"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative bg-black text-white">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter mb-12 sm:mb-16 md:mb-20 lg:mb-24 leading-tight">
            MY <span className="text-orange-600">JOURNEY</span>
          </h2>

          <div className="relative border-l-2 border-orange-600 ml-4 md:ml-8 lg:ml-12 pl-6  md:pl-8 lg:pl-8 pb-8">
            {/* Current Role */}
            <div className="mb-16 sm:mb-20 md:mb-24 lg:mb-28 relative">
              <div className="absolute -left-8 sm:-left-10 md:-left-12 lg:-left-14 bg-orange-600 w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 flex items-center justify-center transform -translate-x-1 -translate-y-1">
                <div className="bg-white w-2 md:w-3 h-2 md:h-3"></div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight">
                  Frontend Engineer
                </div>
                <div className="text-orange-600 font-medium tracking-wider mt-2 md:mt-3 lg:mt-4 text-base">
                  Sep 2023 - Present
                </div>
                <p className="mt-4 sm:mt-6 md:mt-8 text-gray-300 leading-relaxed max-w-3xl text-base sm:text-base md:text-lg">
                  Taking on advanced projects and leading technical
                  implementations. Developing sophisticated features that
                  significantly improved user experience and business metrics.
                </p>
              </div>
            </div>

            {/* Internship */}
            <div className="relative">
              <div className="absolute -left-8 sm:-left-10 md:-left-12 lg:-left-14 bg-orange-600 w-6 sm:w-8 md:w-10 lg:w-12 h-6 sm:h-8 md:h-10 lg:h-12 flex items-center justify-center transform -translate-x-1 -translate-y-1">
                <div className="bg-white w-2 md:w-3 h-2 md:h-3"></div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight">
                  Frontend Engineer Intern
                </div>
                <div className="text-orange-600 font-medium tracking-wider mt-2 md:mt-3 lg:mt-4 text-base">
                  Mar 2023 - Aug 2023
                </div>
                <p className="mt-4 sm:mt-6 md:mt-8 text-gray-300 leading-relaxed max-w-3xl text-base sm:text-base md:text-lg">
                  Started at MULTIPLY as an intern focusing on React
                  development. Quickly demonstrated strong technical skills and
                  initiative, which led to being offered a full-time position.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-28 relative bg-white">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter mb-12 sm:mb-16 md:mb-20 leading-[1.1]">
            MY <span className="text-orange-600">PROJECTS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="mt-20 sm:mt-24 md:mt-32 lg:mt-36 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight mb-6 sm:mb-8 md:mb-10">
              Ready to start a project?
            </h2>
            <Button
              variant="cta"
              size="cta"
              withArrow
              asChild
              className="px-6 py-3 text-base"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
