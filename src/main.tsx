import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import { Index } from "./components/Index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "about",
        async lazy() {
          const { About } = await import("./components/About.tsx");
          return { Component: About };
        },
      },
    ],
  },
  {
    path: "*",
    async lazy() {
      const { NotFound } = await import("./components/NotFound.tsx");
      return { Component: NotFound };
    },
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
