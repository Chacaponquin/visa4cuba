import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { APP_ROUTES } from "./modules/app/domain/constants/app-routes";
import Shop from "./pages/Shop/Shop";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to={APP_ROUTES.SHOP} />} />
        <Route path={APP_ROUTES.SHOP} element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}
