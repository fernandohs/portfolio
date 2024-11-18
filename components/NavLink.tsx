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
    <Link className={`hover:font-bold p-3 ${currentPath === url && 'border-b-2 border-white'}`} href={url}>{title}</Link>
  )
}

export default NavLink