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
import Image from "next/image";
import { ContactBanner } from "@/components";

interface CategorySkill {
  [key: string]: Skill[];
}

const skills: CategorySkill = {
  FrontEnd: [
    {
      Icon: FaVuejs,
      title: "Vue",
    },
    {
      Icon: SiJquery,
      title: "JQuery",
    },
    {
      Icon: FaReact,
      title: "React",
    },
    {
      Icon: FaAngular,
      title: "Angular",
    },
    {
      Icon: TbBrandNuxt,
      title: "Nuxt",
    },
    {
      Icon: TbBrandNextjs,
      title: "Next",
    },
    {
      Icon: FaBootstrap,
      title: "Bootstrap",
    },
    {
      Icon: FaSass,
      title: "SASS",
    },
    {
      Icon: RiTailwindCssFill,
      title: "Tailwind CSS",
    },
    {
      Icon: SiRedux,
      title: "Redux",
    },
    {
      Icon: SiMui,
      title: "Material UI",
    },
    {
      Icon: SiVuetify,
      title: "Vuetify",
    },
    {
      Icon: FaFigma,
      title: "Figma",
    },
    {
      Icon: SiAdobexd,
      title: "Adobe XD",
    },
  ],
  BackEnd: [
    {
      Icon: FaLaravel,
      title: "Laravel",
    },
    {
      Icon: FaPython,
      title: "Python",
    },
    {
      Icon: DiDjango,
      title: "Django",
    },
    {
      Icon: FaNodeJs,
      title: "Node",
    },
  ],
  Database: [
    {
      Icon: SiMariadb,
      title: "MariaDB",
    },
    {
      Icon: SiPostgresql,
      title: "PosgreSQL",
    },
    {
      Icon: DiMsqlServer,
      title: "SQL Server",
    },
    {
      Icon: DiMongodb,
      title: "SQL Server",
    },
    {
      Icon: DiMysql,
      title: "MySQL",
    },
  ],
  Testing: [
    {
      Icon: SiCypress,
      title: "Cypress",
    },
    {
      Icon: SiJest,
      title: "Jest",
    },
    {
      Icon: SiTestinglibrary,
      title: "React Testing Library",
    },
  ],
  Languages: [
    {
      Icon: FaCss3,
      title: "CSS",
    },
    {
      Icon: FaHtml5,
      title: "HTML",
    },
    {
      Icon: FaJsSquare,
      title: "JavaScript",
    },
    {
      Icon: SiTypescript,
      title: "Typescript",
    },
    {
      Icon: FaPhp,
      title: "PHP",
    },
    {
      Icon: FaGitAlt,
      title: "Git",
    },
  ],
};

const skillsLength = Object.keys(skills).length;

export const SkillsPage = () => {
  return (
    <div className="h-full flex flex-col items-center w-full md:px-14">
      <h1 className="text-2xl md:text-5xl text-center md:my-10">My Skills</h1>

      {Object.keys(skills).map((category, index) => (
        <div
          key={`category-skill-${index}`}
          className={`grid grid-cols-1 md:grid-cols-4 w-full py-10 ${
            index <= skillsLength - 2 && "border-b-2 border-white"
          }`}
        >
          <div className="col-span-12 md:col-span-1 flex items-center justify-center flex-col">
            <Image
              src={`/${category.toLowerCase()}.png`}
              height={200}
              width={200}
              alt={category}
            />
            <h1 className="text-2xl md:text-4xl text-center mb-3">
              {category}
            </h1>
          </div>
          <CategorySkills
            key={`category-skills-${index}`}
            skills={skills[category]}
          />
        </div>
      ))}

      <ContactBanner />
    </div>
  );
};

export default SkillsPage;
