import { UserProvider } from "@auth0/nextjs-auth0";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <UserProvider>
      <div className="dark">
        <Header />
        <main className="dark:bg-slate-900 dark:text-zinc-50 mx-auto px-4 font-poppins">
          {children}
        </main>
        <Footer />
      </div>
    </UserProvider>
  );
};

export default Layout;
