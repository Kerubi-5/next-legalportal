import Button from "./Button";
const Complaint = ({ complaint }) => {
  const hover =
    "absolute opacity-0 group-hover:opacity-100 bg-black/75 inset-0 flex flex-col gap-5 align-middle justify-center cursor-pointer duration-300 rounded-lg";

  return (
    <div className="rounded shadow-md shadow-indigo-600 dark:shadow-white dark:bg-slate-800 text-slate-600 dark:text-zinc-400 relative group max-w-sm grow">
      <div className="p-4">
        <div>
          <h2 className="text-xl font-bold text-indigo-600">
            {complaint.caseStatus}
          </h2>
          <p className="truncate mb-3 text-sm">{complaint.category}</p>
          <div className="flex flex-col gap-4">
            <label className="flex gap-2">
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
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              Hello
            </label>
            <label className="flex gap-2">
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
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              Hello
            </label>
          </div>
        </div>
      </div>
      <div className={hover}>
        <div className="px-4 mx-auto grid gap-2">
          <Button color={"success"}>View</Button>
          <Button color={"danger"}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
