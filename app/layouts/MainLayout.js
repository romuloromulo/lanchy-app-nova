"use client";

import React from "react";
import Footer from "./includes/Footer";
import MainHeader from "./includes/MainHeader";
import SubMenu from "./includes/SubMenu";
import TopMenu from "./includes/TopMenu";

function MainLayout({ children }) {
  return (
    <>
      <div id="Mainlayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
        <TopMenu />
        <MainHeader />
        <SubMenu />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default MainLayout;
