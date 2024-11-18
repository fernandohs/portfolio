"use client";

import NavLink from "@/components/NavLink";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/skills", title: "Skills" },
  { url: "/projects", title: "Projects" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-3 px-5 bg-transparent ">
      <div className="items-center text-xl justify-between hidden md:flex ">
        <Link href="/">
          <Image alt="logo" src="/logo.png" height="76" width="63"  className="w-full h-auto" priority/>
        </Link>

        <div className="flex gap-4">
          {menuItems.map((item) => (
            <NavLink key={item.title} {...item} />
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={handleToggleMenu}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-black text-white gap-8">
            {menuItems.map(({ url, title }) => (
              <Link href={url} key={title}>
                {title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
