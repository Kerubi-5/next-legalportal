import { useState } from "react";
const Fab = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className={`
        fixed right-8 bottom-8 p-0 w-16 h-16 bg-green-600 rounded-full hover:bg-green-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none group ${
          open && "rotate-45"
        }`}
        onClick={() => setOpen(!open)}
      >
        <div
          className={`inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm  transition-opacity duration-300 dark:bg-gray-700 -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 ${
            open && "hidden"
          }`}
        >
          Create content
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline-block text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>

      <div
        className={`h-80 w-80 bg-black absolute-center transition-all duration-300 ${
          open ? "opacity-100" : "invisible opacity-0"
        }`}
      ></div>
    </>
  );
};

export default Fab;
