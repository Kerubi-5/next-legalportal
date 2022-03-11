import { UserProvider } from "@auth0/nextjs-auth0";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <UserProvider>
      <Header />
      <main className="container mx-auto px-4 dark font-poppins">
        {children}
      </main>
    </UserProvider>
  );
};

export default Layout;
