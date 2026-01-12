"use client";

import React, { useMemo } from "react";
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

const SkillItem = React.memo(({ skill, isDuplicate = false }: { skill: typeof skills[0]; isDuplicate?: boolean }) => {
  const IconComponent = skill.icon;
  const key = isDuplicate ? `duplicate-${skill.name}` : `first-${skill.name}`;

  return (
    <div
      key={key}
      className="flex-shrink-0 flex items-center group mx-8"
    >
      <div className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110">
        <IconComponent className="text-4xl text-white opacity-70" />
      </div>
      <div className="ml-3">
        <span className="text-lg font-medium text-white opacity-70 uppercase tracking-wider">
          {skill.name}
        </span>
      </div>
    </div>
  );
});
SkillItem.displayName = 'SkillItem';

const ToolRow = () => {
  const memoizedSkills = useMemo(() => {
    return [
      ...skills.map(skill => ({ skill, isDuplicate: false })),
      ...skills.map(skill => ({ skill, isDuplicate: true }))
    ];
  }, []);

  return (
    <div className="w-full">
      {/* Fixed height container for the revolving tools */}
      <div className="relative h-16 overflow-hidden bg-gradient-to-r from-[#4D229D]/20 to-[#2C2F6C]/20">
        <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2">
          <div className="animate-scroll flex items-center">
            {memoizedSkills.map(({ skill, isDuplicate }) => (
              <SkillItem key={`${isDuplicate ? 'duplicate-' : 'first-'}${skill.name}`} skill={skill} isDuplicate={isDuplicate} />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 60s linear infinite; /* Slower on mobile */
          }
        }
      `}</style>
    </div>
  );
};

export default ToolRow;
