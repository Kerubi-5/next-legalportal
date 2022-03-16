import { UserProvider } from "@auth0/nextjs-auth0";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";
import { useState } from "react";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Meta
        title="Legal Portal"
        desc="A legal portal web application portal to be able to access legal help from the philippines remotely"
        keywords={[
          "Legal Portal",
          "KK",
          "Law",
          "Legal Help",
          "Legal Advice",
          "Consultation",
        ]}
        canonical="http://localhost:3000/"
        image="https://pbs.twimg.com/profile_images/961218223168397314/k7ehkZsK_400x400.jpg"
      />
      <UserProvider>
        <div className={darkMode ? "dark" : ""}>
          <Header />
          <main className="dark:bg-slate-900 dark:text-zinc-50 mx-auto px-4 font-poppins">
            {children}
          </main>
          <Footer />
        </div>
      </UserProvider>
    </>
  );
};

export default Layout;
