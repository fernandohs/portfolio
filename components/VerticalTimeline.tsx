import { VerticalTimelineProject } from "@/components";

const projects = [
  {
    title: "SofiaXT - Smartbooks",
    dateBetween: "2020 - 2021",
    role: "Front End Developer",
  },
  {
    title: "SofiaXT - Smartbooks",
    dateBetween: "2020 - 2021",
    role: "Front End Developer",
  },
  {
    title: "SofiaXT - Smartbooks",
    dateBetween: "2020 - 2021",
    role: "Front End Developer",
  },
  {
    title: "SofiaXT - Smartbooks",
    dateBetween: "2020 - 2021",
    role: "Front End Developer",
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
