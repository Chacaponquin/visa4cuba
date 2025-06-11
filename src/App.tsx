import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { APP_ROUTES } from "./modules/app/domain/constants/app-routes";
import Shop from "./pages/Shop/Shop";
import Buy from "./pages/Buy/Buy";
import { ShopProvider } from "./modules/shop/context/ShopContext";
import { ToastContainer } from "react-toastify";
import AboutUs from "./pages/AboutUs/AboutUs";

export default function App() {
  return (
    <BrowserRouter>
      <ShopProvider>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<Navigate replace to={APP_ROUTES.SHOP} />} />
          <Route path={APP_ROUTES.SHOP} element={<Shop />} />
          <Route path={APP_ROUTES.BUY} element={<Buy />} />
          <Route path={APP_ROUTES.ABOUT_US} element={<AboutUs />} />
        </Routes>
      </ShopProvider>
    </BrowserRouter>
  );
}
