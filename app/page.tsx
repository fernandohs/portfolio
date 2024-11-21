import Image from "next/image";
import { FaJsSquare, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import type Skill from "@/interfaces/skill";
import type { CoreSkillI } from "@/interfaces";
import { SkillCard } from "@/components/SkillCard";
import { CoreSkill } from "@/components/CoreSkill";
import { ContactBanner } from "@/components";
import Link from "next/link";

const skills: Skill[] = [
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
    title: "TypeScript",
  },
];

const coreSkills: CoreSkillI[] = [
  {
    url: "/frontend.png",
    title: "FrontEnd",
  },
  {
    url: "/backend.png",
    title: "BackEnd",
  },
  {
    url: "/database.png",
    title: "DataBase",
  },
  {
    url: "/testing.png",
    title: "Testing",
  },
];

export default function HomePage() {
  return (
    <div className="h-full flex flex-col lg:flex-row  justify-center md:px-20  px-10">
      <div className="flex flex-wrap items-center justify-center w-full">
        <div
          className="flex flex-col w-full items-center justify-center xl:p-28 md:p-32 p-0"
          style={{
            backgroundImage: "url(/circulo.png)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="text-2xl xl:text-4xl text-center pt-10 mt-10">
            Hi, my name is Fernando!
          </h1>

          <p className="text-2xl xl:text-4xl text-center xl:max-w-[500px]">
            I’m a Passionate Senior Web Developer
          </p>

          <p className="xl:text-xl mt-5 text-center xl:w-[500px] ">
            With over 10 years of experience in designing and building scalable,
            user-centered digital solutions, I am dedicated to continuous
            improvement, adhering to best practices, and delivering high-quality
            software.
          </p>

          <div className="flex flex-col gap-10 w-full items-center xl:mt-10">
            <Link href="/projects">
              <button className="transition ease-in-out delay-75 mt-10 p-2 rounded-sm border border-white w-full xl:w-36 hover:bg-white hover:text-primary">
                See projects
              </button>
            </Link>

            
            <Link href="/about">
              <button className="transition ease-in-out delay-75 mt-10 p-2 rounded-sm border border-white w-full xl:w-36 hover:bg-white hover:text-primary">
                See projects
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full items-center justify-center  xl:pl-3 xl:w-1/2 xl:mt-60">
          <h1 className="text-2xl xl:text-4xl text-start w-full">My core skills</h1>

          <p className="my-2">
            I offer a range of answers, each tailored to meet your unique needs
            and aid in achieving your business goals.. I offer a range of
            answers, each tailored to meet your unique needs and aid in
            achieving your business goals.
          </p>

          <p className="my-3">
            I offer a range of answers, each tailored to meet your unique needs
            and aid in achieving your business goals.
          </p>

          <div className="grid grid-cols-2 xl:flex xl:flex-row justify-center max-sm:flex-wrap">
            {skills.map((item, index) => (
              <SkillCard key={`skills-${index}`} {...item} />
            ))}
          </div>

          <div className="my-4 flex justify-start w-full">
            <Link href="/skills">
              <button className="transition ease-in-out delay-75 p-1 rounded-sm border border-white w-full xl:w-56 hover:bg-white hover:text-primary">
                Find out more
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col w-full xl:w-1/2 items-center justify-center my-5 xl:mt-60">
          <div className="grid gap-16 grid-cols-2 xl:grid-cols-2">
            {coreSkills.map((item) => (
              <CoreSkill key={`core-skill-${item.title}`} {...item} />
            ))}
          </div>
        </div>

        <div className="flex flex-col w-full xl:w-1/2 items-center justify-center pl-3 xl:mt-32">
          <Image
            src="/projects/project-1.png"
            alt="project-1-image"
            width="700"
            height="700"
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="flex flex-col w-full xl:w-1/2 xl:items-start items-center justify-center pl-3 xl:pl-36 mt-5 xl:mt-32">
          <h1 className="text-2xl xl:text-4xl">
            Let&apos;s have a look at my portfolio
          </h1>

          <Link href="/projects">
            <button className="transition ease-in-out delay-75 mt-10 p-2 rounded-sm border border-white w-80 xl:w-55 hover:bg-white hover:text-primary">
              See projects
            </button>
          </Link>
        </div>
        <ContactBanner />
      </div>
    </div>
  );
}
