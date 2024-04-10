import { Link } from "react-router-dom";
import { SiSparkpost } from "react-icons/si";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const links = [
  { label: "Home", href: "/" },
  { label: "Posts", href: "/posts" },
  { label: "Profile", href: "/profile" },
];

const NavBar = () => {
  const router = useNavigate();
  const userInfoCookie = Cookies.get("userInfo");
  const userInfo = userInfoCookie ? JSON.parse(userInfoCookie) : null;

  const handleLogout = () => {
    Cookies.remove("userInfo");
    router("/login");
  };

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

      <div className="flex items-center">
        <div>{userInfo?.email}</div>
        <button
          onClick={handleLogout}
          className="ml-4 px-3 py-1 bg-primary text-white rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
