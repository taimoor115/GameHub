import { createBrowserRouter } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";
import { lazy } from "react";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const GameDetailPage = lazy(() => import("./pages/GameDetailPage"));

const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "games/:slug", element: <GameDetailPage /> },

      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
