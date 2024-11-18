import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  title: string;
  description: string;
  addBorderBottom: boolean;
}

export const Project = ({ id, title, description, addBorderBottom }: Props) => {
  return (
    <div
      className={`grid xl:grid-cols-2 w-full py-10 xl:justify-end ${
        addBorderBottom && "border-b"
      }`}
    >
      <div className="col-span-1 flex items-center justify-center flex-col">
        <Image
          src={`/project-${id}.png`}
          height={405}
          width={600}
          alt={`Project ${title}`}
        />
      </div>
      <div className="col-span-1 flex flex-col py-5 justify-end">
        <h1 className="text-2xl md:text-3xl text-start">{title}</h1>

        <p className="max-w-[700px] mt-3 text-justify">{description}</p>

        <Link
          href={`projects/${id}`}
          className="mt-10 p-2 rounded-sm border border-white w-36 text-center hover:bg-white hover:text-primary"
        >
          See project
        </Link>
      </div>
    </div>
  );
};
