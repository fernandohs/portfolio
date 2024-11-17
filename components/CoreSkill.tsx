import Image from "next/image";

interface Props  {
  url: string,
  title: string
}

export const CoreSkill = ({url, title}: Props) => {
  return (
    <div>
      <Image src={url} alt="" width="130" height="130" />
      <h1 className="text-center capitalize mt-3">
        {title}
      </h1>
    </div>
  );
};
