"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle, ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "react-hot-toast";

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

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [copied, setCopied] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
      toast.success("Login number copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast.error("Failed to copy login number");
    }
  };

  const displayedTags = showAllTags ? project.tags : project.tags.slice(0, 4);
  const remainingTagsCount = project.tags.length - 4;

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-orange-300 h-full flex flex-col">
      {/* Project Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>

        {/* Login Credentials Section */}
        {project.hasLoginCredentials && (
          <div className="mb-4 p-4 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-grow">
                <p className="text-sm font-medium text-orange-800 mb-2">
                  Demo Access Required
                </p>
                <p className="text-xs text-orange-700 mb-3">
                  Click to copy login credentials for demo access
                </p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    copyToClipboard(project.loginNumber!);
                  }}
                  className="inline-flex items-center gap-2 text-xs font-medium bg-orange-100 hover:bg-orange-200 text-orange-800 px-3 py-2 rounded-md transition-colors border border-orange-200 hover:border-orange-300"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Login
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {displayedTags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              {tag}
            </span>
          ))}
          {remainingTagsCount > 0 && !showAllTags && (
            <button
              onClick={() => setShowAllTags(true)}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors cursor-pointer"
            >
              +{remainingTagsCount} more
            </button>
          )}
          {showAllTags && project.tags.length > 4 && (
            <button
              onClick={() => setShowAllTags(false)}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors cursor-pointer"
            >
              Show less
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Button
            variant="default"
            size="sm"
            asChild
            className="flex-1 bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-medium"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </Button>

          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="flex-1 border-gray-300 hover:border-gray-400 hover:bg-gray-50 font-medium"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
