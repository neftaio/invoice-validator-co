import Footer from "@components/Footer";
import Header from "@components/Header";
import React from "react";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="mx-5 min-h-screen">
      <Header />
      <div className="-mb-12 h-full">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
