import { useState } from "react";
const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h2>
        <button
          type="button"
          className={`
          flex justify-between items-center p-5 w-full font-medium text-left text-gray-900 bg-gray-100 ${
            open ? "rounded-t-lg" : "rounded-lg"
          } border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800`}
          onClick={() => setOpen(!open)}
        >
          <span>{title}</span>
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </button>
      </h2>
      <div
        className={`text-justify p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${
          open ? "" : "hidden"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
