"use client";

import React from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiGit,
  SiGithub,
} from "react-icons/si";

const skills = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

const ToolRow = () => {
  return (
    <div className="w-full">
      {/* Fixed height container for the revolving tools */}
      <div className="relative h-20 overflow-hidden bg-indigo-900 ">
        <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2">
          <div className="animate-scroll flex items-center">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center group mx-8"
                >
                  <div className=" p-3 rounded-xl transition-all duration-300  group-hover:scale-110">
                    <IconComponent className="text-4xl text-white opacity-70" />
                  </div>
                  <div className="ml-3">
                    <span className="text-lg font-medium text-white opacity-70 uppercase tracking-wider">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
            {/* Duplicate the skills to create seamless looping */}
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 flex items-center group mx-8"
                >
                  <div className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110">
                    <IconComponent className="text-4xl text-white opacity-70" />
                  </div>
                  <div className="ml-1">
                    <span className="text-lg font-medium text-white opacity-70 uppercase tracking-wider">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
          min-width: 200%;
        }
        @media (max-width: 640px) {
          .animate-scroll {
            animation: scroll 40s linear infinite; /* Slower on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default ToolRow;
