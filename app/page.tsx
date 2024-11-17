import Image from "next/image";

import { FaJsSquare, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import type Skill from "@/interfaces/skill";
import type { CoreSkillI } from "@/interfaces";
import { SkillCard } from '@/components/SkillCard';
import { CoreSkill } from '@/components/CoreSkill';

const skills: Skill[] = [
  {
    Icon: FaCss3,
    title: "CSS",
    color: "text-white",
    category: "front-end",
  },
  {
    Icon: FaHtml5,
    title: "HTML",
    color: "text-white",
    category: "front-end",
  },
  {
    Icon: FaJsSquare,
    title: "JavaScript",
    color: "text-white",
    category: "front-end",
  },
  {
    Icon: SiTypescript,
    title: "TypeScript",
    color: "text-white",
    category: "front-end",
  },
];


const coreSkills: CoreSkillI[] = [
  {
    url: '/frontend.png',
    title: 'FrontEnd',
  },
  {
    url: '/backend.png',
    title: 'BackEnd',
  },
  {
    url: '/database.png',
    title: 'DataBase',
  },
  {
    url: '/testing.png',
    title: 'Testing',
  },
]

export default function HomePage() {
  return (
    <div className="h-full flex flex-col lg:flex-row  justify-center px-10">
      <div className="flex flex-wrap items-center justify-center w-full">
        <div className="flex flex-col w-full items-center justify-center" >
          <h1 className="text-2xl md:text-4xl text-center">
            Hi, my name is Fernando!
          </h1>

          <p className="text-2xl md:text-4xl text-center">
            I’m a Passionate Senior Web Developer
          </p>

          <p className="text-xl mt-5 text-center w-3/5">
            With over 10 years of experience in designing and building scalable, user-centered digital solutions, I am dedicated to continuous improvement, adhering to best practices, and delivering high-quality software.
          </p>

          <div className="flex flex-col gap-2">
            <button className="mt-10 p-2 rounded-sm border border-white w-36">
              See projects
            </button>

            <button className="p-4 ">About me</button>
          </div>
        </div>

        <div className="flex flex-col xs:w-full md:w-1/2 items-center justify-center  pl-3 ">
          <h1 className="text-4xl">My core skills</h1>
          <p className="">
            I offer a range of answers, each tailored to meet your unique needs
            and aid in achieving your business goals.. I offer a range of
            answers, each tailored to meet your unique needs and aid in
            achieving your business goals.
          </p>

          <p className="my-3">
            I offer a range of answers, each tailored to meet your unique needs
            and aid in achieving your business goals.
          </p>


          <div className="flex flex-row">
            {skills.map((item, index) => <SkillCard key={`skills-${index}`} {...item}/>)}
          </div>

          <div className="my-4 flex justify-start w-full">
            <button className=" p-1 rounded-sm border border-white w-56">
              Find out more
            </button>
          </div>
        </div>

        <div className="flex flex-col xs:w-full md:w-1/2 items-center justify-center  ">
          <div className="grid  md:gap-16 xs:grid-cols-1 md:grid-cols-2">
            {coreSkills.map(item => <CoreSkill key={`core-skill-${item.title}`} {...item}/>)}
          </div>
        </div>

        <div className="flex flex-col xs:w-full md:w-1/2 items-center justify-center pl-3">
          <Image src="/project1.png" alt="" width="700" height="700"  className=""/>
          
        </div>

        <div className="flex flex-col xs:w-full md:w-1/2 items-center justify-center">
          <h1 className="text-4xl">
            let's have a look at my portfolio
          </h1>

          <button className=" p-1 rounded-sm border border-white w-44 mt-5">
            See projects
          </button>
        </div>


        <div className="flex flex-col w-full items-center justify-center bg-secondary py-10 mt-10">
          <h1 className="text-2xl">
            Let's talk!
          </h1>

          <p className="w-1/3 text-center">
          Have a project or idea you’d like to bring to life? Let’s work together to create innovative and impactful digital solutions. I’d love to hear from you!
          </p>

          <button className="p-1 rounded-sm border border-white w-44 my-5">
            Contact
          </button>
        </div>

       

      </div>
    </div>
  );
}
