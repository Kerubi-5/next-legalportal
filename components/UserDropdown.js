import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Toggle from "./Toggle";

const Dropdown = ({ user }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block text-left ">
      <div className="w-10" onClick={() => setOpen(!open)}>
        <Image
          className="rounded-full"
          src={user.picture}
          layout="responsive"
          width="100%"
          height="100%"
          alt="User"
        />
      </div>

      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow dark:shadow-zinc-50 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800  ${
          open ? "" : "hidden"
        }`}
      >
        <div className="py-1">
          <Link href="/profile">
            <a className="text-gray-700 dark:text-zinc-400 block px-4 py-2 text-sm">
              Profile
            </a>
          </Link>
          <a
            href="#"
            className="text-gray-700 dark:text-zinc-400 block px-4 py-2 text-sm"
          >
            Support
          </a>
          <Toggle />
          <div className="px-4 pb-2">
            <Link href="/api/auth/logout">
              <a className="block items-center px-4 py-2 text-sm font-medium text-center rounded text-rose-500 border border-rose-500 hover:bg-rose-600 hover:text-rose-100">
                Logout
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
