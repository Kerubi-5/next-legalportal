import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Dropdown from "./UserDropdown";

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
  ];

  const activeLink = (route) => {
    return router.pathname === route ? "border-indigo-500" : "";
  };

  const renderLinks = () => {
    return Links.map((link) => {
      return (
        <Link key={link.link} href={link.link}>
          <a
            className={`py-4 px-2 border-transparent border-b-4 text-gray-500 hover:border-indigo-500 font-semibold transition-all ease-in-out duration-300 ${activeLink(
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
    <header className="bg-white dark:bg-slate-800 dark:text-zinc-50 shadow-md dark:shadow-slate-600 md:px-4 md:flex md:justify-between items-center sticky top-0 z-50 font-poppins py-4">
      <div className="p-2 px-4">
        <h1 className="uppercase">Logo</h1>
      </div>
      <nav
        className={`bg-white dark:bg-slate-800 gap-5 py-5 md:py-0 md:flex md:flex-row items-center space-x-1 transition-all duration-300 absolute md:static w-screen md:w-auto md:shadow-none shadow-lg  ${
          open ? "flex flex-col top-16" : "-top-96"
        }`}
      >
        {renderLinks()}
      </nav>
      <div className="absolute top-3 right-14 md:static cursor-pointer">
        {!isLoading &&
          (user ? (
            <Dropdown user={user} />
          ) : (
            <Link href="/api/auth/login">
              <a className="inline-flex items-center px-6 py-2 text-sm font-medium text-center rounded text-green-500 border border-green-500 hover:bg-green-600 hover:text-green-100">
                Login
              </a>
            </Link>
          ))}
      </div>
      <div
        className="absolute top-6 right-6 md:hidden cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </div>
    </header>
  );
};

export default Header;
