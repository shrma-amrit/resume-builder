import { createHashRouter, Navigate, RouterProvider } from "react-router-dom";
import Error from "../pages/Error";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";

const router = createHashRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default function Root() {
  return (
    <div className="flex flex-col">
      <div className="h-10 md:h-20">
        <Header />
      </div>
      <div className="h-[calc(100vh-2.5rem)] md:h-[calc(100vh-5rem)] overflow-auto flex flex-col justify-between">
        <RouterProvider router={router} />
        <Footer />
      </div>
    </div>
  );
}
