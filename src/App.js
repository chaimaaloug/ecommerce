import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Card from "./pages/Card/Card";
import Payment from "./pages/Payment/Payment";
import Confirmation from "./pages/Confirmation/Confirmation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/card",
    element: <Card />
  },
  {
    path: "/payment",
    element: <Payment />
  },
  {
    path: "/confirmation",
    element: <Confirmation />
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
