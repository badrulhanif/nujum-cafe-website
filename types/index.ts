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

export type PriceItemDetails = {
  original: string;
  current: string;
};

export type PriceItem = {
  currency: string;
  standard?: PriceItemDetails;
  hot?: PriceItemDetails;
  cold?: PriceItemDetails;
};

export type MenuCategory =
  | "Appetizer"
  | "Main Course"
  | "Steak"
  | "Pasta"
  | "Pizza"
  | "Kids Meal"
  | "Coffee"
  | "Non-Coffee"
  | "Tea Series"
  | "Refreshments"
  | "Canned Drinks"
  | "Air Buah"
  | "Others";

export type MenuItem = {
  id: string;
  category: MenuCategory;
  src: string;
  alt: string;
  name: string;
  description: string;
  price: PriceItem;
  isDiscount: boolean;
  isBestSeller: boolean;
};
