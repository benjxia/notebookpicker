import { Products } from "./components/Products";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/products',
    element: <Products />
  }
];

export default AppRoutes;
