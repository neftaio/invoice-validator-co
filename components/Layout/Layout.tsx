import Footer from "@components/Footer";
import Header from "@components/Header";
import React from "react";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="px-4 min-h-screen sm:px-8">
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
