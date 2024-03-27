"use client";

import TopMenu from "./includes/TopMenu/TopMenu";
import NavBar from "./includes/NavBar";
import Footer from "./includes/Footer";
import Loading from "../components/loading";
import { useEffect, useState } from "react";

export default function MainLayout({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener("storage", function () {
      let res = localStorage.getItem("isLoading");
      res === "false" ? setIsLoading(false) : setIsLoading(true);
    });
  });

  return (
    <>
      <div id="MainLayout" className="mx-auto bg-red-500 overflow-hidden">
        <div>
          {isLoading ? <Loading /> : <div></div>}
          <TopMenu />
          <NavBar />
        </div>

        <div>{children}</div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
