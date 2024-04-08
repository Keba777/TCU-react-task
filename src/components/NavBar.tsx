import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";

import { SiSparkpost } from "react-icons/si";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/" },
  { label: "Posts", href: "/posts" },
];

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-2 text-primary bg-white">
      <div className="flex md:space-x-32">
        <Link to="/">
          <SiSparkpost className="w-7 h-8 text-primary hover:text-secondary" />
        </Link>

        <ul className="invisible md:visible flex items-center md:space-x-5 ">
          {links.map((link) => (
            <li key={link.href}>
              <Link to={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex ">
        <FiUser />
      </div>
    </nav>
  );
};

export default NavBar;
