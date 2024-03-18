import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root.jsx";
import About from "./routes/about.jsx";
import ErrorPage from "./ui/ErrorPage/";
import Buy, { loader as buyLoader } from "./routes/buy.jsx";
import OurTeams, { loader as ourTeamLoader } from "./routes/ourTeams.jsx";

import "./index.css";
import { fetchTestimonialData } from "./lib/loaders.js";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "/buy",
        element: <Buy />,
        loader: buyLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team/:teamName",
        element: <OurTeams />,
        loader: ourTeamLoader,
      },
      {
        path: '/crash',
        element: <ErrorPage />,
      },
      fetchTestimonialData,
    ],
  },
]);

const rootElement = document.querySelector("#root");

if (rootElement) {
  ReactDOM.createRoot(document.querySelector("#root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
} else {
  console.error("No root element found");
}
