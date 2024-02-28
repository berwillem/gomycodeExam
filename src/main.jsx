import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Students from "./pages/Students/Students.jsx";
import Exercices from "./pages/Exercices/Exercices.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import "./index.css";
import Student from "./pages/Student/Student.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/students",
    element: <Students />,
  },
  {
    path: "/students/:id",
    element: <Student />,
  },
  {
    path: "/exercices",
    element: <Exercices />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
