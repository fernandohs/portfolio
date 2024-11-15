import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image 
          src="/profile.png"
          alt=""
          fill
          className="object-contain"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center px-5">
        <h1 className="text-4xl md:text-6xl font-bold">
          Fernando&apos;s Portfolio
        </h1>

        <p className="md:text-xl">
        Welcome to my portfolio, a space where passion meets precision and ideas take shape.
        Explore a curated selection of projects that embody my dedication to innovation, creativity,
        and the art of crafting exceptional digital experiences.
        </p>

        <div className="flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            Projects
          </button>

          <button className="p-4 rounded-lg ring-1 ring-black bg-white text-deepBlack">
            Skills
          </button>
        </div>
      </div>
    </div>
  );
}
 