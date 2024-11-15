'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  url: string
  title: string
}

export const NavLink = ({url, title} : Props) => {
  const currentPath = usePathname()


  return (
    <Link className={`hover:font-bold rounded-lg p-3 ${currentPath === url && 'bg-gray-300 text-black'}`} href={url}>{title}</Link>
  )
}

export default NavLink