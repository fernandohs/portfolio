import {
  FaAngular,
  FaBootstrap,
  FaFigma,
  FaGitAlt,
  FaSass,
  FaNodeJs,
  FaJsSquare,
  FaLaravel,
  FaPhp,
  FaPython,
  FaReact,
  FaVuejs,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { DiMysql, DiMongodb, DiDjango, DiMsqlServer } from "react-icons/di";
import {
  SiJquery,
  SiPostgresql,
  SiMariadb,
  SiAdobexd,
  SiVuetify,
  SiMui,
  SiTestinglibrary,
  SiJest,
  SiCypress,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
import { TbBrandNuxt, TbBrandNextjs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { CategorySkills } from "@/components/CategorySkills";
import type Skill from "@/interfaces/skill";

interface CategorySkill {
  [key: string]: Skill[];
}

const skills: Skill[] = [
  {
    Icon: FaVuejs,
    title: "Vue",
    color: "text-green-400",
    category: "front-end",
  },
  {
    Icon: SiJquery,
    title: "Vue",
    color: "text-green-400",
    category: "front-end",
  },
  {
    Icon: FaReact,
    title: "React",
    color: "text-blue-400",
    category: "front-end",
  },
  {
    Icon: FaAngular,
    title: "Angular",
    color: "text-red-400",
    category: "front-end",
  },
  {
    Icon: TbBrandNuxt,
    title: "Nuxt",
    color: "text-blue-400",
    category: "front-end",
  },
  {
    Icon: TbBrandNextjs,
    title: "Next",
    color: "text-blue-400",
    category: "front-end",
  },
  {
    Icon: FaBootstrap,
    title: "Bootstrap",
    color: "text-pink-400",
    category: "front-end",
  },
  {
    Icon: FaSass,
    title: "SASS",
    color: "text-blue-400",
    category: "front-end",
  },
  {
    Icon: RiTailwindCssFill,
    title: "Tailwind CSS",
    color: "text-blue-400",
    category: "front-end",
  },
  {
    Icon: SiRedux,
    title: "Redux",
    color: "text-blue-400",
    category: "front-end",
  },
  {
    Icon: SiMui,
    title: "Material UI",
    color: "text-blue-400",
    category: "front-end",
  },
  {
    Icon: SiVuetify,
    title: "Vuetify",
    color: "text-blue-400",
    category: "front-end",
  },

  {
    Icon: FaCss3,
    title: "CSS",
    color: "text-yellow-400",
    category: "language",
  },
  {
    Icon: FaHtml5,
    title: "HTML",
    color: "text-yellow-400",
    category: "language",
  },
  {
    Icon: FaJsSquare,
    title: "JavaScript",
    color: "text-yellow-400",
    category: "language",
  },
  {
    Icon: SiTypescript,
    title: "Typescript",
    color: "text-yellow-400",
    category: "language",
  },
  { Icon: FaPhp, title: "PHP", color: "text-yellow-400", category: "back-end" },

  {
    Icon: SiMariadb,
    title: "MariaDB",
    color: "text-yellow-400",
    category: "database",
  },
  {
    Icon: SiPostgresql,
    title: "PosgreSQL",
    color: "text-yellow-400",
    category: "database",
  },
  {
    Icon: DiMsqlServer,
    title: "SQL Server",
    color: "text-yellow-400",
    category: "database",
  },
  {
    Icon: DiMongodb,
    title: "SQL Server",
    color: "text-yellow-400",
    category: "database",
  },
  {
    Icon: DiMysql,
    title: "MySQL",
    color: "text-blue-400",
    category: "database",
  },

  {
    Icon: FaLaravel,
    title: "Laravel",
    color: "text-yellow-400",
    category: "back-end",
  },
  {
    Icon: FaPython,
    title: "Python",
    color: "text-yellow-400",
    category: "back-end",
  },
  {
    Icon: DiDjango,
    title: "Django",
    color: "text-yellow-400",
    category: "back-end",
  },
  {
    Icon: FaNodeJs,
    title: "Node",
    color: "text-yellow-400",
    category: "back-end",
  },

  {
    Icon: SiCypress,
    title: "Git",
    color: "text-orange-400",
    category: "testing",
  },
  {
    Icon: SiJest,
    title: "Jest",
    color: "text-yellow-400",
    category: "testing",
  },
  {
    Icon: SiTestinglibrary,
    title: "React Testing Library",
    color: "text-red-400",
    category: "testing",
  },

  {
    Icon: FaGitAlt,
    title: "Git",
    color: "text-yellow-400",
    category: "others",
  },
  {
    Icon: FaFigma,
    title: "Figma",
    color: "text-yellow-400",
    category: "others",
  },
  {
    Icon: SiAdobexd,
    title: "Adobe XD",
    color: "text-yellow-400",
    category: "others",
  },
];

const skillsByCategory: CategorySkill = Object.groupBy(skills, ({ category }) => category);

export const SkillsPage = () => {
  return (
    <div className="h-full flex flex-col items-center">
      {Object.keys(skillsByCategory).map((category, index) => (
        <CategorySkills
          key={`category-skills-${index}`}
          skills={skillsByCategory[category]}
          title={category}
        />
      ))}
    </div>
  );
};

export default SkillsPage;
