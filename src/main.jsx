import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Root from "./layout/Root";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import SingleProduct from "./Components/SharedComponents/SingleProduct";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
// ..
AOS.init({
  offset: 120,
  delay: 0, 
  duration: 4000, 
  easing: 'ease'
});


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
        path: 'category',
        element: <Shop></Shop>
      },
      {
        path: '/category/:id',
        element: <SingleProduct></SingleProduct>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      }
    ]
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
