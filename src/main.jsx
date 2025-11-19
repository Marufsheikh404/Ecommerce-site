import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Root from "./layout/Root";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import SingleProduct from "./Components/SharedComponents/SingleProduct";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import AuthProvider from "./Providers/AuthProvider";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PrivateRoute from "./Routes/PrivateRoute";
import "aos/dist/aos.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/category',
        element: (
          <PrivateRoute><Shop></Shop></PrivateRoute>
        )
      },
      {
        path: '/category/:id',
        element: (
          <PrivateRoute><SingleProduct></SingleProduct></PrivateRoute>
        )
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
