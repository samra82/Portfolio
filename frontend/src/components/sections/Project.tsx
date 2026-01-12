"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import createImageUrlBuilder from "@sanity/image-url";

import { getProjects } from "@/lib/api";
import { fadeInUp } from "@/Animations/animations";
import { trackProjectClick } from "@/utils/tracking";

const imageBuilder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
});

const urlFor = (source: { _ref: string; [key: string]: unknown }) =>
  imageBuilder.image(source).auto("format").fit("max");

interface Project {
  _id: string;
  title: string;
  description: string;
  impact: string;
  role: string;
  tech: string[];
  thumbnail?: {
    asset?: {
      _ref: string;
    };
  };
  vercelLink?: string;
  githubLink?: string;
  behanceLink?: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Optimized data fetching with caching
    const fetchProjects = async () => {
      try {
        // Add basic caching to avoid repeated API calls
        const cacheKey = 'portfolio_projects';
        const cachedData = localStorage.getItem(cacheKey);
        const cacheTimeKey = 'portfolio_projects_time';
        const cachedTime = localStorage.getItem(cacheTimeKey);

        const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

        if (cachedData && cachedTime && (Date.now() - parseInt(cachedTime)) < CACHE_DURATION) {
          setProjects(JSON.parse(cachedData));
          setLoading(false);
          return;
        }

        const projectsData = await getProjects();
        setProjects(projectsData);
        localStorage.setItem(cacheKey, JSON.stringify(projectsData));
        localStorage.setItem(cacheTimeKey, Date.now().toString());
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative py-16 md:py-20 px-6 bg-gradient-to-b from-[#4D229D]/20 to-[#2C2F6C]/20"
    >
      {/* Header */}
      <header className="text-center mb-12">
        <motion.h2
          id="portfolio-heading"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold"
        >
          Selected <span className="text-[#8B4BEC]">Work</span>
        </motion.h2>

        <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-[#8B4BEC] to-[#FDBE79] mx-auto rounded-full" />

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-3xl mx-auto text-[#F2F2F2] text-base md:text-lg"
        >
          Products built with clarity, restraint, and intent.
        </motion.p>
      </header>

      {/* Content */}
      <div className="max-w-5xl mx-auto space-y-20">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#8B4BEC]"></div>
          </div>
        ) : (
          <>
            {projects.slice(0, 3).map((project, index) => { // Show first 3 projects immediately
              const reverse = index % 2 !== 0;

              return (
                <motion.article
                  key={project._id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={clsx(
                    "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center",
                    reverse && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  {/* Media */}
                  <figure className="relative overflow-hidden rounded-xl border border-[#8B4BEC]/30 bg-[#2C2F6C]/40">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={
                          project.thumbnail?.asset?._ref
                            ? urlFor(project.thumbnail.asset)
                                .width(400) // Reduced initial image size
                                .height(225)
                                .quality(70) // Lower quality for faster loading
                                .url()
                            : "/projects/resume-builder.svg"
                        }
                        alt={`${project.title} project preview`}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAADAAQDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AKg//9k=" // Base64 placeholder
                        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                        loading={index === 0 ? "eager" : "lazy"} // Only eager load the first image
                      />
                    </div>
                  </figure>

                  {/* Content */}
                  <div className="max-w-xl">
                    <h3 className="text-xl md:text-2xl font-medium text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-[#B0B0B0] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <dl className="text-sm text-[#B0B0B0] space-y-2 mb-6">
                      <div>
                        <dt className="inline font-medium text-white">Impact:</dt>{" "}
                        <dd className="inline">{project.impact}</dd>
                      </div>
                      <div>
                        <dt className="inline font-medium text-white">Role:</dt>{" "}
                        <dd className="inline">{project.role}</dd>
                      </div>
                    </dl>

                    {/* Tech Stack */}
                    <ul className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <li
                          key={`${project._id}-${tech}`}
                          className="text-xs px-3 py-1 rounded-full border border-[#8B4BEC]/30 bg-[#2C2F6C]/40 text-white"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div
                      aria-label={`${project.title} project links`}
                      className="flex flex-wrap items-center gap-5 text-sm font-medium"
                    >
                      {project.vercelLink && (
                        <a
                          href={project.vercelLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo of ${project.title}`}
                          className="inline-flex items-center gap-2 text-[#8B4BEC] hover:text-[#FDBE79] transition"
                          onClick={() => trackProjectClick(project._id, project.title)}
                        >
                          View Project
                          <ExternalLink size={14} />
                       </a>
                      )}

                      {project.behanceLink && (
                        <a
                          href={project.behanceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Case study of ${project.title}`}
                          className="inline-flex items-center gap-2 text-[#8B4BEC] hover:text-[#FDBE79] transition"
                          onClick={() => trackProjectClick(project._id, project.title)}
                        >
                          Case Study
                          <ExternalLink size={14} />
                       </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Source code of ${project.title}`}
                          className="inline-flex items-center gap-2 text-[#8B4BEC] hover:text-[#FDBE79] transition"
                          onClick={() => trackProjectClick(project._id, project.title)}
                        >
                          Code on GitHub
                          <ExternalLink size={14} />
                       </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}

            {/* Render remaining projects with Intersection Observer for performance */}
            {projects.slice(3).map((project, index) => {
              const actualIndex = index + 3;
              const reverse = actualIndex % 2 !== 0;

              return (
                <motion.article
                  key={project._id}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  className={clsx(
                    "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center",
                    reverse && "lg:[&>*:first-child]:order-2"
                  )}
                >
                  {/* Media */}
                  <figure className="relative overflow-hidden rounded-xl border border-[#8B4BEC]/30 bg-[#2C2F6C]/40">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={
                          project.thumbnail?.asset?._ref
                            ? urlFor(project.thumbnail.asset)
                                .width(400)
                                .height(225)
                                .quality(70)
                                .url()
                            : "/projects/resume-builder.svg"
                        }
                        alt={`${project.title} project preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAADAAQDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AKg//9k="
                        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </figure>

                  {/* Content */}
                  <div className="max-w-xl">
                    <h3 className="text-xl md:text-2xl font-medium text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-[#B0B0B0] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <dl className="text-sm text-[#B0B0B0] space-y-2 mb-6">
                      <div>
                        <dt className="inline font-medium text-white">Impact:</dt>{" "}
                        <dd className="inline">{project.impact}</dd>
                      </div>
                      <div>
                        <dt className="inline font-medium text-white">Role:</dt>{" "}
                        <dd className="inline">{project.role}</dd>
                      </div>
                    </dl>

                    {/* Tech Stack */}
                    <ul className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <li
                          key={`${project._id}-${tech}`}
                          className="text-xs px-3 py-1 rounded-full border border-[#8B4BEC]/30 bg-[#2C2F6C]/40 text-white"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div
                      aria-label={`${project.title} project links`}
                      className="flex flex-wrap items-center gap-5 text-sm font-medium"
                    >
                      {project.vercelLink && (
                        <a
                          href={project.vercelLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo of ${project.title}`}
                          className="inline-flex items-center gap-2 text-[#8B4BEC] hover:text-[#FDBE79] transition"
                          onClick={() => trackProjectClick(project._id, project.title)}
                        >
                          View Project
                          <ExternalLink size={14} />
                       </a>
                      )}

                      {project.behanceLink && (
                        <a
                          href={project.behanceLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Case study of ${project.title}`}
                          className="inline-flex items-center gap-2 text-[#8B4BEC] hover:text-[#FDBE79] transition"
                          onClick={() => trackProjectClick(project._id, project.title)}
                        >
                          Case Study
                          <ExternalLink size={14} />
                       </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Source code of ${project.title}`}
                          className="inline-flex items-center gap-2 text-[#8B4BEC] hover:text-[#FDBE79] transition"
                          onClick={() => trackProjectClick(project._id, project.title)}
                        >
                          Code on GitHub
                          <ExternalLink size={14} />
                       </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
}
