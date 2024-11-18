import { ContactBanner, VerticalTimeline } from "@/components";
import Image from "next/image";

const hobbies = [
  "Video Games",
  "Movies",
  "Hiking",
  "Yoga",
  "Spinning",
  "Running",
  "Reading",
];

export const AboutPage = () => {
  return (
    <div className="h-full flex flex-col justify-center px-40">
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col xs:w-full md:w-1/3 items-center justify-center">
          <Image
            src="/profile.png"
            alt=""
            width="272"
            height="272"
            className=""
          />
        </div>

        <div className="flex flex-col xs:w-full md:w-2/3">
          <h1 className="text-4xl text-start">About me</h1>

          <p className="text-start my-10 max-w-[527px]">
            I'm a Senior Web Developer with over a decade of experience crafting
            scalable, user-focused digital solutions. I thrive on continuous
            improvement, applying best practices, and delivering high-quality
            software that meets and exceeds expectations.
          </p>

          <p className="text-start max-w-[527px]">
            My expertise spans educational platforms, ERP, and CRM systems, and
            I bring strong communication, organizational, and leadership skills
            to every project. Whether collaborating with a team or working
            independently, I’m driven by a user-first approach to create
            meaningful, impactful digital experiences.
          </p>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden w-full flex-col">
        <div className="py-12 animate-marquee whitespace-nowrap">
          {hobbies.map((hobby) => (
            <span key={hobby} className="text-4xl mx-10">
              {hobby}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl text-start">Profesional Journey</h1>

        <a href="/resume.pdf" download="resume.pdf">
          <button className="transition ease-in-out delay-75 p-1 rounded-sm border border-white hover:bg-white hover:text-primary w-52 my-5">
            Download resume
          </button>
        </a>
      </div>

      <VerticalTimeline />
      <ContactBanner/>
    </div>
  );
};

export default AboutPage;
