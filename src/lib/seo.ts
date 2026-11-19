import { portfolio } from "@/data/portfolio";

export interface BreadcrumbCrumb {
  name: string;
  path: string;
}

export function buildBreadcrumbJsonLd(items: BreadcrumbCrumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item:
        item.path === "/"
          ? portfolio.siteUrl
          : `${portfolio.siteUrl}${item.path}`,
    })),
  };
}

export function buildPageGraphJsonLd(
  page: Record<string, unknown>,
  breadcrumbs: BreadcrumbCrumb[],
) {
  return {
    "@context": "https://schema.org",
    "@graph": [page, buildBreadcrumbJsonLd(breadcrumbs)],
  };
}
