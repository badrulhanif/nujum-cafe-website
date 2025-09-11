import { ItemStatus, NavItem, FooterItem } from "@/types";

export type SiteConfig = typeof siteConfig;

const defaultStatus = {
  isDisabled: false,
  isHidden: false,
  isComingSoon: false,
};

export const siteConfig = {
  navItems: [
    {
      id: "cerita-kami",
      name: "Cerita Kami",
      href: "/cerita-kami",
      status: { ...defaultStatus },
    },
    {
      id: "menu",
      name: "Menu",
      href: "/menu",
      status: { ...defaultStatus },
    },
  ] satisfies (ItemStatus | NavItem)[],
  footerItems: [
    {
      id: "cerita-kami",
      category: "informasi",
      name: "Cerita Kami",
      href: "/cerita-kami",
      status: { ...defaultStatus },
    },
    {
      id: "menu",
      category: "informasi",
      name: "Menu",
      href: "/menu",
      status: { ...defaultStatus },
    },
    {
      id: "terma-perkhidmatan",
      category: "sah",
      name: "Terma Perkhidmatan",
      href: "/terma-perkhidmatan",
      status: { ...defaultStatus },
    },
    {
      id: "privasi",
      category: "sah",
      name: "Privasi",
      href: "/privasi",
      status: { ...defaultStatus },
    },
  ],
};
