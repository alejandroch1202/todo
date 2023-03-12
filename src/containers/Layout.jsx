import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";
import "@styles/Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="app">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
