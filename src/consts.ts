// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = "HUZL.ORG";
export const SITE_TITLE = "HUZL";
export const BRAND_FOOT = "HUZL LLC";
export const SITE_DESCRIPTION = "Find your side hustle, get that hustle mindset, live your life!";

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = "HUZL.ORG - All Tags";
export const Tags_DESCRIPTION = "All tags and the count of articles related to each tag";

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
  return {
    title: `All articles on '${tag}' tag`,
    description: `Explore articles about ${tag} for different perspectives and in-depth analysis.`,
  };
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
  return {
    title: `All articles in '${category}' category`,
    description: `Browse all articles under the ${category} category`,
  };
}

// Header Links, src/components/Header.astro
export const HeaderLinks = [
  { href: "/category/hustles/1/", title: "Hustles" },
  { href: "/category/mindset/1/", title: "Mindset" },
  { href: "/category/finance/1/", title: "Finance" },
  { href: "/category/podcast/1/", title: "Podcast" },
];

// Footer Links, src/components/Footer.astro
export const FooterLinks = [
  { href: "/about/", title: "About" },
  { href: "/contact/", title: "Contact" },
  { href: "/partners/", title: "Partners" },
  // { href: "/", title: "Swag" },
];

//  Legal Links
export const LegalLinks = [
  { href: "/privacy/", title: "Privacy Policy" },
  { href: "/terms/", title: "Terms of Service" },
];

// Social Links, src/components/Footer.astro
export const SocialLinks = [
  { href: "/rss.xml", icon: "tabler:rss", label: "RSS" },
  {
    href: "https://instagram.com/huzl_org",
    icon: "tabler:brand-instagram",
    label: "Instagram",
  },
  {
    href: "https://x.com/huzl_org",
    icon: "tabler:brand-x",
    label: "X",
  },
  {
    href: "https://github.com/huzl-org",
    icon: "tabler:brand-github",
    label: "GitHub",
  },
  {
    href: "https://youtube.com/@huzl-org",
    icon: "tabler:brand-youtube",
    label: "YouTube",
  },
];

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `Site Search`;
export const SEARCH_PAGE_DESCRIPTION = `Search all content on ${SITE_TITLE}`;
