import { useState } from "react";
const Fab = () => {
  const [open, setOpen] = useState(false);

  const clickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };
  return (
    <>
      <button
        className={`
        fixed right-8 bottom-8 p-0 w-16 h-16 bg-green-600 rounded-full hover:bg-green-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none z-50 group ${
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
        onClick={clickOverlay}
        className={`${open ? "" : "hidden"} bg-black/50 fixed inset-0 z-10`}
      >
        <div className="absolute-center bg-white w-11/12 md:max-w-md rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl font-bold">Simple Modal!</p>
              <div className="modal-close cursor-pointer z-50">
                <svg
                  className="fill-current text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  onClick={() => setOpen(false)}
                >
                  <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                </svg>
              </div>
            </div>

            <p>Modal content can go here</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>
            <p>...</p>

            <div className="flex justify-end pt-2 gap-2">
              <button className="btn danger" onClick={() => setOpen(false)}>
                Close
              </button>
              <button className="btn success">Next</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fab;
