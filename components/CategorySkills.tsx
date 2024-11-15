
import { SkillCard } from '@/components';
import type Skill from '@/interfaces/skill';


interface props {
  skills: Skill[],
  title: string,
}

export const CategorySkills = ({skills, title}: props) => {
  return (
    <div className="flex flex-row gap-8 w-full justify-center flex-wrap my-6">
      <h2 className="mb-4 font-bold text-4xl flex w-full px-10 capitalize">
        {title}
      </h2>
      {skills.map((item, index) => (
          <SkillCard key={`${item.title}-${index}`} {...item} />
        ))}
    </div>
  );
};
