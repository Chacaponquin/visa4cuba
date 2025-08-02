import { SitemapStream, streamToPromise } from "sitemap";
import * as fs from "fs";
import * as path from "path";
import { APP_ROUTES } from "../src/modules/app/domain/constants/app-routes";
import { TranslationRouteBuilder } from "../src/modules/app/domain/core/translation-route-builder";
import { LANGUAGE } from "../src/modules/app/modules/language/domain/language";

class AppRoute {
  constructor(readonly route: string, readonly priority: number) {}

  routes(): AppRoute[] {
    const result = [] as AppRoute[];

    const builder = new TranslationRouteBuilder(this.route);

    result.push(new AppRoute(builder.build(LANGUAGE.EN), this.priority));
    result.push(new AppRoute(builder.build(LANGUAGE.ES), this.priority));
    result.push(new AppRoute(builder.build(LANGUAGE.IT), this.priority));

    return result;
  }
}

async function generateSitemap() {
  const routes: AppRoute[] = [
    new AppRoute(APP_ROUTES.HOME, 1),
    new AppRoute(APP_ROUTES.VISA, 0.7),
    new AppRoute(APP_ROUTES.SHOP, 0.7),
    new AppRoute(APP_ROUTES.INSURANCE, 0.7),
    new AppRoute(APP_ROUTES.ABOUT_US, 0.7),
    new AppRoute(APP_ROUTES.INFORMATION.COOKIES, 0.5),
    new AppRoute(APP_ROUTES.INFORMATION.PRIVACITY, 0.5),
    new AppRoute(APP_ROUTES.INFORMATION.TERMS_AND_CONDITIONS, 0.5),
    new AppRoute(APP_ROUTES.BLOG.ROOT, 0.8),
    new AppRoute(APP_ROUTES.BLOG.ARTICLES.VISA_ELECTRONIC, 0.8),
  ];

  const sitemap = new SitemapStream({ hostname: "https://www.visa4cuba.com" });

  const publicPath = path.join(__dirname, "../", "public", "sitemap.xml");
  const writeStream = fs.createWriteStream(publicPath);

  sitemap.pipe(writeStream);

  for (const route of routes) {
    for (const troute of route.routes()) {
      sitemap.write({
        url: troute.route,
        changefreq: "weekly",
        priority: troute.priority,
        lastmod: new Date(),
      });
    }
  }

  sitemap.end();

  await streamToPromise(sitemap);
  console.log("✅ Sitemap generado en public/sitemap.xml");
}

generateSitemap().catch((err) => {
  console.error("❌ Error generando el sitemap:", err);
  process.exit(1);
});
