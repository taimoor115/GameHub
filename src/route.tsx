import { createBrowserRouter } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GameDetailPage from "./pages/GameDetailPage";
import Homepage from "./pages/Homepage";
import Layout from "./pages/Layout";

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
