import { SkillCard } from "@/components";
import type Skill from "@/interfaces/skill";

interface props {
  skills: Skill[];
}

export const CategorySkills = ({ skills }: props) => {
  return (
    <div className="col-span-3 flex flex-wrap  gap-4">
      {skills.map((item, index) => (
        <SkillCard key={`skill-${item.title}-${index}`} {...item} />
      ))}
    </div>
  );
};
