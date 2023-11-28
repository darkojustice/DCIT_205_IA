import { Fragment, Suspense, useEffect, useState } from "react";
import { FC } from "react";
import { Dispatch } from "react";

import { NavLink, Link, useLocation } from "react-router-dom";

import { Outlet } from "react-router-dom";

import navigation from "../navigation";
import { CenterLoader } from "../../loaders";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
const LoadingComponent = () => {
  return (
    <>
      <CenterLoader />
    </>
  );
};

const Layout = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <Navbar />
        </div>
        <main style={{ flex: 1 }}>
          <Suspense fallback={LoadingComponent()}>
            <Outlet />
          </Suspense>
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
