export type ItemStatus = {
  isDisabled?: boolean;
  isHidden?: boolean;
  isComingSoon?: boolean;
};

export type NavItem = {
  id: string;
  name: string;
  href?: string;
  target?: string;
  rel?: string;
  status?: ItemStatus;
};

export type FooterCategory = "informasi";

export type FooterItem = {
  id: string;
  category: string;
  name: string;
  href?: string;
  target?: string;
  rel?: string;
  status?: ItemStatus;
};

export type FacilitiesItem = {
  id: string;
  src: string;
  alt: string;
  name: string;
  description: string;
};

export type PriceItem = {
  currency: string;
  original: number;
  current: number;
};

export type MenuItem = {
  id: string;
  src: string;
  alt: string;
  name: string;
  description: string;
  price: PriceItem;
};
