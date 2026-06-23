"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { staggerDelay } from "@/Animations/animations";

interface Project {
  _id: string;
  title: string;
  description: string;
  impact: string;
  role: string;
  tech: string[];
  thumbnail?: { asset?: { _ref: string } };
  vercelLink?: string;
  githubLink?: string;
  behanceLink?: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) { 
  const isInView = true;
  const ref = null;
  const reverse = index % 2 !== 0;
  const isFirst = index === 0;
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Dynamically resolve Sanity image URL (avoids loading Sanity deps at module level)
  useEffect(() => {
    const thumbRef = project.thumbnail?.asset?._ref;
    if (!thumbRef) {
      setImageUrl("/sample.svg");
      return;
    }
    let cancelled = false;
    (async () => {
      try {
        const mod = await import("@sanity/image-url");
        const imageBuilder = mod.default({
          projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
          dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
        });
        if (!cancelled) {
          setImageUrl(imageBuilder.image({ _ref: thumbRef }).width(400).height(225).quality(70).url());
        }
      } catch {
        if (!cancelled) setImageUrl("/projects/resume-builder.svg");
      }
    })();
    return () => { cancelled = true; };
  }, [project.thumbnail?.asset?._ref]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <article
      ref={ref}
      className={clsx(
        "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-all duration-700",
        reverse && "lg:[&>*:first-child]:order-2",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      )}
      style={staggerDelay(index)}
    >
      <figure className="relative overflow-hidden rounded-xl border border-[#9E47FF]/30 bg-[#1F143D]/40">
        <div className="relative aspect-[16/9]">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={`${project.title} project preview`}
              fill
              priority={isFirst}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAADAAQDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AKg//9k="
              className="object-cover transition-transform duration-700 ease-out hover:scale-105"
              loading={isFirst ? "eager" : "lazy"}
            />
          )}
        </div>
      </figure>

      <div className="max-w-xl">
        <h3 className="text-xl md:text-2xl font-medium text-white mb-3">{project.title}</h3>
        <p className="text-[#C3BCDB] leading-relaxed mb-5">{project.description}</p>
        <dl className="text-sm text-[#C3BCDB] space-y-2 mb-6">
          <div><dt className="inline font-medium text-white">Impact:</dt> <dd className="inline">{project.impact}</dd></div>
          <div><dt className="inline font-medium text-white">Role:</dt> <dd className="inline">{project.role}</dd></div>
        </dl>
        <ul className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <li key={`${project._id}-${tech}`} className="text-xs px-3 py-1 rounded-full border border-[#9E47FF]/30 bg-[#1F143D]/40 text-white">{tech}</li>
          ))}
        </ul>
        <div role="group" aria-label={`${project.title} project links`} className="flex flex-wrap items-center gap-5 text-sm font-medium">
          {project.vercelLink && (
            <a href={project.vercelLink} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title}`} className="inline-flex items-center gap-2 text-[#a855f7] hover:text-[#D2B4FF] transition">
              View Project <ExternalLink size={14} />
            </a>
          )}
          {project.behanceLink && (
            <a href={project.behanceLink} target="_blank" rel="noopener noreferrer" aria-label={`Case study of ${project.title}`} className="inline-flex items-center gap-2 text-[#a855f7] hover:text-[#D2B4FF] transition">
              Case Study <ExternalLink size={14} />
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" aria-label={`Source code of ${project.title}`} className="inline-flex items-center gap-2 text-[#a855f7] hover:text-[#D2B4FF] transition">
              Code on GitHub <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const isInView = true;
  const ref = null;
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
      let cancelled = false;
      (async () => {
        try {
          const { getProjects } = await import('@/lib/api');
          const data = await getProjects();
           if (!cancelled) setProjects(data);
         } catch {
           if (!cancelled) setProjects([]);
         } finally {
           if (!cancelled) setLoading(false);
         }
       })();
       return () => {
         cancelled = true;
       };
     }, []);
     
  return (
    <section id="portfolio" ref={ref} aria-labelledby="portfolio-heading" className="relative py-16 md:py-20 px-6 bg-[#1F143D]/20">
      <header className={`text-center mb-12 transition-all duration-700 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
        <h2 id="portfolio-heading" className="text-4xl font-bold">
          Selected <span className="text-[#9E47FF]">Work</span>
        </h2>
        <div className="mt-4 h-[2px] w-16 bg-gradient-to-r from-[#9E47FF] to-[#D2B4FF] mx-auto rounded-full" />
        <p className="mt-6 max-w-3xl mx-auto text-[#FFFFFF] text-base md:text-lg">
          Products built with clarity, restraint, and intent.
        </p>
      </header>
      <div className="max-w-5xl mx-auto space-y-20">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#9E47FF]" />
          </div>
        ) : (
          projects.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))
        )}
      </div>
    </section>
  );
}
