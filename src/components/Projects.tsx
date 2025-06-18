/* eslint-disable @next/next/no-img-element */
import * as motion from "framer-motion/client";
import {
  FolderGit2,
  ExternalLink,
  Github,
  Code2,
  Copy,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    title: "Colex - Legal Tech Platform",
    description:
      "A comprehensive legal research platform built for law students and lawyers. Features case folder management, document uploads, AI-powered chat assistant, and context-aware research tools.",
    image: "/assets/project-thumbnail/legal-case-law-thumnail.png",
    tags: [
      "Legal Tech",
      "AI Assistant",
      "Document Management",
      "Case Research",
      "Flutter",
    ],
    liveUrl: "https://dev.getcolex.com/",
    githubUrl: "",
    hasLoginCredentials: true,
    loginNumber: "7003900023",
  },
  {
    title: "CaseShop - Create Your Own Phone Case",
    description:
      "Built a fully responsive website using Next.js, allowing users to design custom phone cases.",
    image: "/assets/project-thumbnail/caseshop-thumbnail.png",
    tags: ["Next.js", "PostgresSQL", "Stripe", "Tailwind CSS", "Prisma ORM"],
    liveUrl: "https://case-shop-rouge.vercel.app/",
    githubUrl: "https://github.com/AjmalAli10/case-shop",
  },
  {
    title: "QKart - E-commerce",
    description:
      "QKart is an e-commerce application offering a variety of products for customers to choose from.",
    image: "/assets/project-thumbnail/qkart-thumbnail.png",
    tags: ["React", "Express", "MongoDB"],
    liveUrl: "https://qkart-frontend-ajmal.netlify.app/",
    githubUrl: "https://github.com/AjmalAli10/Qkart",
  },
  {
    title: "XBoard - News Aggregator",
    description:
      "XBoard is a News Feed website that will feature the latest news for select topics, from Flipboard.",
    image: "/assets/project-thumbnail/xboard-thumbnail.png",
    tags: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://xboard-news-ajmal.netlify.app/",
    githubUrl: "https://github.com/AjmalAli10/XBOARD_NEWS_AGGREGATOR",
  },
];

export default function Projects() {
  const [copiedStates, setCopiedStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  const copyToClipboard = async (text: string, projectTitle: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedStates((prev) => ({ ...prev, [projectTitle]: true }));
      setTimeout(() => {
        setCopiedStates((prev) => ({ ...prev, [projectTitle]: false }));
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mb-12 text-primary-600">
            <FolderGit2 className="w-8 h-8 text-primary-600" />
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-slate-50 relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    priority={false}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>

                  {project.hasLoginCredentials && (
                    <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm text-amber-800 mb-2">
                        <strong>Login Required:</strong> Please paste the copied
                        number when visiting the site.
                      </p>
                      <button
                        onClick={() =>
                          copyToClipboard(project.loginNumber!, project.title)
                        }
                        className="flex items-center gap-2 text-sm bg-amber-100 hover:bg-amber-200 text-amber-900 px-3 py-1.5 rounded-md transition-colors"
                      >
                        {copiedStates[project.title] ? (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy Login Number
                          </>
                        )}
                      </button>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + tagIndex * 0.1,
                          duration: 0.2,
                        }}
                        className="px-4 py-1.5 bg-gradient-to-r from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 text-primary-700 rounded-lg text-sm font-medium border border-primary-200 shadow-sm flex items-center gap-1.5 transition-colors"
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.02 }}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white md:px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center gap-2 group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                      Live Demo
                    </motion.a>
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        className="flex-1 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-black text-white md:px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow transition-all duration-300 flex items-center justify-center gap-2 group"
                      >
                        <Github className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                        Source Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
