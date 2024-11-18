import Link from 'next/link';
import { FaLinkedin } from "react-icons/fa";


const menuItems = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/skills", title: "Skills" },
  { url: "/projects", title: "Projects" },
];

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer className="bg-secondary   w-full">
      <div className="container px-6 py-4 mx-auto">
        <div className="items-center text-xl justify-between hidden md:flex">
          <div className="my-4 text-white flex">Fernando Herrera</div>

          <div className="flex gap-4">
            {menuItems.map(({url,title}) => (
              <Link key={`footer-link-${title}`} className={`hover:font-bold p-3 `} href={url}>{title}</Link>
            ))}
          </div>

          <div className="my-4 text-white flex">
            <a
              href="https://www.linkedin.com/in/fernando-herrera-sanchez-90699859"
              title="Linkedin"
            >
              <FaLinkedin size="40"/>
            </a>
          </div>
        </div>

        <hr className="my-5 border-white" />

        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-white text-center">
            Copyright {currentYear} by Fernando Herrera
          </p>
        </div>
      </div>
    </footer>
  );
};
