import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const router = useRouter();
  const { user, isLoading } = useUser();
  const [open, setOpen] = useState(false);
  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Advice",
      link: "/advice",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
  ];

  const activeLink = (route) => {
    return router.pathname === route ? "text-purple-500" : "";
  };

  const renderLinks = () => {
    return Links.map((link) => {
      return (
        <Link key={link.link} href={link.link}>
          <a
            className={`py-4 px-2 border-transparent border-b-4 text-gray-500 hover:border-purple-500 font-semibold transition-all ease-in-out duration-300  ${activeLink(
              link.link
            )}`}
          >
            {link.name}
          </a>
        </Link>
      );
    });
  };

  return (
    <header className="bg-white shadow-lg md:px-4 md:flex md:justify-between items-center sticky top-0 mb-5 font-poppins">
      <div className="p-2">
        <h1 className="uppercase">Logo</h1>
      </div>
      <nav
        className={`gap-5 py-5 md:py-0 md:flex md:flex-row items-center space-x-1 transition-all ease-in-out duration-300 ${
          open ? "flex flex-col" : "hidden"
        }`}
      >
        {renderLinks()}
        {!isLoading &&
          (user ? (
            <Link href="/api/auth/logout">
              <a className="inline-flex items-center px-6 py-2 text-sm font-medium text-center rounded text-rose-100 bg-rose-500 hover:bg-rose-600">
                Logout
              </a>
            </Link>
          ) : (
            <Link href="/api/auth/login">
              <a className="inline-flex items-center px-6 py-2 text-sm font-medium text-center rounded text-green-100 bg-green-500 hover:bg-green-600">
                Login
              </a>
            </Link>
          ))}
      </nav>
      <div
        className="absolute top-3 right-4 md:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </header>
  );
};

export default Header;
