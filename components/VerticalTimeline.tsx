import { VerticalTimelineProject } from "@/components";

const projects = [
  {
    title: "3Pillar",
    dateBetween: "2022 - present",
    role: "Front End Developer",
  },
  {
    title: "SofiaXT",
    dateBetween: "2021 - 2022",
    role: "Front End Developer",
  },
  {
    title: "University Kino",
    dateBetween: "2018 - 2021",
    role: "Full Stack Developer",
  },
  {
    title: "Suspiros Pastelerias",
    dateBetween: "2015 - 2018",
    role: "Full Stack Developer",
  },
  {
    title: "Freelance",
    dateBetween: "2013 - present",
    role: "Full Stack Developer",
  },
];

export const VerticalTimeline = () => {
  return (
    <div className="container  mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div
          className="border-2-2 absolute  border-white h-[85%] border"
          style={{ left: "50%" }}
        ></div>

        {projects.map((item, index) => (
          <VerticalTimelineProject
            title={item.title}
            dateBetween={item.dateBetween}
            isLeftContent={(index + 1) % 2 === 0}
            role={item.role}
            key={`${item.title}-${index}`}
          />
        ))}
      </div>
    </div>
  );
};
