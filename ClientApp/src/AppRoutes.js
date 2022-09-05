import { Products } from "./components/Products";
import { Productsv2 } from "./components/Productsv2";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/products',
    element: <Productsv2 />
  },
  {
    path: '/product'
    
  }
];

export default AppRoutes;
