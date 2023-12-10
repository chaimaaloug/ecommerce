import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Payment from "./pages/Payment/Payment";
import Confirmation from "./pages/Confirmation/Confirmation";
import './App.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:slug",
    element: <Product />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/confirmation",
    element: <Confirmation />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
