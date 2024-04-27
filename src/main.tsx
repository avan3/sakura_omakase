import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./components/Hero.tsx";
import Layout from "./components/Layout.tsx";
import About from "./components/About.tsx";
import Welcome from "./components/Welcome.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <Welcome />
          </>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
