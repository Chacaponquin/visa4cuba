import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  type RouteObject,
} from "react-router";
import { APP_ROUTES } from "./modules/app/domain/constants/app-routes";
import Shop from "./pages/Shop/Shop";
import Buy from "./pages/Buy/Buy";
import { ShopProvider } from "./modules/shop/context/ShopProvider";
import { ToastContainer } from "react-toastify";
import AboutUs from "./pages/AboutUs/AboutUs";
import Visas from "./pages/Visas/Visas";
import Insurence from "./pages/Insurence/Insurence";
import Home from "./pages/Home/Home";
import Privacity from "./pages/Information/components/Privacity/Privacity";
import { LanguageProvider } from "./modules/app/modules/language/context/LanguageProvider";
import { TranslationRoute } from "./modules/app/domain/core/translation-route";
import { LANGUAGE } from "./modules/app/modules/language/domain/language";
import Cookies from "./pages/Information/components/Cookies/Cookies";
import Terms from "./pages/Information/components/Terms/Terms";
import Blog from "./pages/Blog/Blog";
import VisaElectronic from "./pages/Blog/components/Articles/components/VisaElectronic/VisaElectronic";
import ReactGA from "react-ga4";

ReactGA.initialize("G-1Y2ZYK2JWW");
ReactGA.send("pageview");

const pages = [
  new TranslationRoute({ component: Shop, route: APP_ROUTES.SHOP }),
  new TranslationRoute({ component: Buy, route: APP_ROUTES.BUY }),
  new TranslationRoute({ component: AboutUs, route: APP_ROUTES.ABOUT_US }),
  new TranslationRoute({ component: Visas, route: APP_ROUTES.VISA }),
  new TranslationRoute({ component: Insurence, route: APP_ROUTES.INSURANCE }),
  new TranslationRoute({ component: Home, route: APP_ROUTES.HOME }),
  new TranslationRoute({
    component: Terms,
    route: APP_ROUTES.INFORMATION.TERMS_AND_CONDITIONS,
  }),
  new TranslationRoute({
    component: Cookies,
    route: APP_ROUTES.INFORMATION.COOKIES,
  }),
  new TranslationRoute({
    component: Privacity,
    route: APP_ROUTES.INFORMATION.PRIVACITY,
  }),
  new TranslationRoute({ component: Blog, route: APP_ROUTES.BLOG.ROOT }),
  new TranslationRoute({
    component: VisaElectronic,
    route: APP_ROUTES.BLOG.ARTICLES.VISA_ELECTRONIC,
  }),
];

const routes = [] as RouteObject[];

for (const p of pages) {
  const result = [] as RouteObject[];

  const Component = p.component;

  result.push({
    element: <Component builder={p.builder} language={LANGUAGE.EN} />,
    path: p.builder.build(LANGUAGE.EN),
  });

  result.push({
    element: <Component builder={p.builder} language={LANGUAGE.ES} />,
    path: p.builder.build(LANGUAGE.ES),
  });

  result.push({
    element: <Component builder={p.builder} language={LANGUAGE.IT} />,
    path: p.builder.build(LANGUAGE.IT),
  });

  result.push({
    element: <Component builder={p.builder} />,
    path: p.route,
  });

  routes.push(...result);
}

const router = createBrowserRouter([
  { path: "/", element: <Navigate replace to={APP_ROUTES.HOME} /> },
  ...routes,
]);

export default function App() {
  return (

      <LanguageProvider>
        <ShopProvider>
          <ToastContainer />

          <RouterProvider router={router} />
        </ShopProvider>
      </LanguageProvider>
  );
}
