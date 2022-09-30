import { Productsv2 } from "./components/Productsv2";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    // home page
    index: true,
    element: <Home />
  },
  {
    // filtering page
    path: '/products',
    element: <Productsv2 />
  },
  {
    // WIP: individual product pages
    path: '/product'
    
  }
];

export default AppRoutes;
