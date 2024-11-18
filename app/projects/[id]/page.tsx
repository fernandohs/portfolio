import Image from "next/image";
import { promises as fs } from "fs";
import type { Data, Project } from "@/interfaces";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

async function getData(id: string): Promise<Project | undefined> {
  const file = await fs.readFile(process.cwd() + "/app/data.json", "utf8");
  const data: Data = JSON.parse(file);
  const project = data.projects.find((item) => item.id === id);

  return project;
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = await getData(id);

  if (!project) return notFound();

  return (
    <div className="h-full flex flex-col items-center px-5 xl:px-20 text-justify">
      <h1 className="text-2xl md:text-5xl my-5 xl:my-10 text-start w-full">
        {project.title}
      </h1>

      <p>{project.description}</p>

      <div className="flex justify-start  w-full gap-10">
        <h1 className="text-xl md:text-3xl my-10 flex">
          <span className="font-semibold">Role</span>:<span>{project.role}</span>
        </h1>
        <h1 className="text-xl md:text-3xl my-10 flex">
          <span className="font-semibold">Industry</span>: {project.industry}
        </h1>
      </div>

      <div className="flex flex-col justify-start w-full  items-center">
        <Image
          alt="company"
          className="rounded-md"
          height={500}
          priority
          src={`/project-${project.id}-company.png`}
          width={1200}
        />

        <h1 className="text-2xl md:text-3xl my-5 flex w-full font-semibold">
          Challenge
        </h1>
        <p>{project.challenge}</p>

        <h1 className="text-2xl md:text-3xl my-5 flex w-full font-semibold">
          Solution
        </h1>

        <p className="whitespace-pre-line break-words">{project.solution}</p>

        {project.systemImages.map((urlImage, index) => (
          <Image
            alt="company"
            className="my-3 rounded-md w-full h-auto"
            height={500}
            key={`${urlImage}-${index}`}
            priority
            src={urlImage}
            width={1200}
          />
        ))}

        <h1 className="text-2xl md:text-3xl  flex w-full font-semibold">
          Key takeaways
        </h1>

        <ul className="list-outside  list-disc w-full pl-10">
          {project.keyAways.map(({ key, description }, index) => (
            <li key={`${key}-${index}`} className="my-2">
              <span className="font-semibold">{key}</span>: <span>{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
