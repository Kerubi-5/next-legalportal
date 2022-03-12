import { UserProvider } from "@auth0/nextjs-auth0";
import Header from "./Header";
import Head from "next/head";
import Meta from "./Meta";

const Layout = ({ children }) => {
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
        <Header />
        <main className="container mx-auto px-4 dark font-poppins">
          {children}
        </main>
      </UserProvider>
    </>
  );
};

export default Layout;
