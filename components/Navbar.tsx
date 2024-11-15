'use client';

import NavLink from '@/components/NavLink';
import Link from 'next/link';
import { useState } from 'react';

const menuItems = [
  { url: '/', title: 'Home'},
  { url: '/about', title: 'About'},
  { url: '/skills', title: 'Skills'},
  { url: '/Project', title: 'Project'},
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleToggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="text-2xl flex items-center justify-between h-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 uppercase">
      <div className="hidden md:flex gap-8 border-2 border-sky-500 p-2 rounded-lg">
        {menuItems.map((item) => <NavLink key={item.title} {...item}/>)}
      </div>
      <div className="md:hidden">
        <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={handleToggleMenu}>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-black text-white gap-8">
            {menuItems.map( ({url, title}) => <Link href={url} key={title}>{title}</Link>)}
          </div>)
        }
      </div>
    </div>
  )
}