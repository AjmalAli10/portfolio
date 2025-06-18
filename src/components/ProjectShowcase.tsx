"use client";

import { toast } from "react-hot-toast";

interface Project {
  title: string;
  type: string;
  period: string;
  highlights: string[];
  skills: string[];
  links?: {
    demo?: string;
    video?: string;
    login?: string;
  };
}

interface ProjectShowcaseProps {
  project: Project;
}

export default function ProjectShowcase({ project }: ProjectShowcaseProps) {
  const handleCopyLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    const loginData = atob("NzAwMzkwMDAyMw=="); // Base64 encoded to hide from dev tools
    navigator.clipboard
      .writeText(loginData)
      .then(() => {
        toast.success("Login number copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy login number");
      });
  };

  return (
    <div className="bg-white p-6 sm:p-8 border-l-4 border-orange-600 mb-10 md:mb-12 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 md:mb-8">
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight">
            {project.title}
          </h3>
          <p className="text-gray-600 mt-2">{project.type}</p>
          {project.links && (
            <div className="flex flex-wrap gap-3 mt-4">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-orange-600 hover:text-orange-500 text-sm uppercase tracking-wider font-medium underline"
                >
                  Demo Link
                </a>
              )}
              {project.links.video && (
                <a
                  href={project.links.video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-orange-600 hover:text-orange-500 text-sm uppercase tracking-wider font-medium underline"
                >
                  Video Link
                </a>
              )}
              {project.links.login && (
                <button
                  onClick={handleCopyLogin}
                  className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 text-sm uppercase tracking-wider font-medium transition-colors cursor-pointer"
                >
                  <span>Login: ••••••••••</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
        <span className="mt-4 md:mt-0 bg-gray-100 text-gray-800 px-4 sm:px-5 py-2 sm:py-3 inline-block uppercase tracking-wider text-sm">
          {project.period}
        </span>
      </div>

      <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 ml-5 sm:ml-6 list-disc text-gray-700">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="pl-2">
            <span className="text-gray-900 text-base sm:text-lg">
              {highlight}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8">
        {project.skills.map((skill) => (
          <span
            key={skill}
            className="border border-gray-300 px-3 sm:px-4 py-1.5 sm:py-2 text-sm uppercase tracking-wide hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
