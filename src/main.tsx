import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout.tsx";
import { Index } from "./components/Index.tsx";
import { NotFound } from "./components/NotFound.tsx";

const router = createBrowserRouter(
  [
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
        {
          path: "menu",
          async lazy() {
            const { Menu } = await import("./components/Menu.tsx");
            return { Component: Menu };
          },
        },
        {
          path: "reservations",
          async lazy() {
            const { Reservations } = await import(
              "./components/Reservations.tsx"
            );
            return { Component: Reservations };
          },
        },
        {
          path: "contact",
          async lazy() {
            const { Contact } = await import("./components/Contact.tsx");
            return { Component: Contact };
          },
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
  { basename: "/sakura_omakase/" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
