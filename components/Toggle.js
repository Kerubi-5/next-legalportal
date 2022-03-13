import { useState } from "react";
const Toggle = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mx-4 py-2">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            id="toggle"
            type="checkbox"
            className="sr-only"
            value={open}
            onChange={() => setOpen(!open)}
          />
          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div
            className={`
          absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition ${
            open ? "translate-x-full bg-slate-400" : ""
          }`}
          ></div>
        </div>
        <p className="text-gray-700 dark:text-zinc-400 block px-2 py-2 text-sm">
          {open ? "Dark" : "Light"}
        </p>
      </label>
    </div>
  );
};

export default Toggle;
