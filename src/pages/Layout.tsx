import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import { Suspense } from "react";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense
        fallback={<span className="loading loading-spinner text-error"></span>}
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
