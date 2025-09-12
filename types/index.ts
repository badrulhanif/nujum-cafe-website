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
  label: string;
  original: string;
  current: string;
};

export type PriceItem = {
  currency: string;
  options: PriceItemDetails[];
};

export type MenuCategory =
  | "Appetizer"
  | "Main Course"
  | "Steak"
  | "Pasta"
  | "Pizza"
  | "Kids Meal"
  | "Sauce"
  | "Coffee"
  | "Non-Coffee"
  | "Tea Series"
  | "Refreshments"
  | "Canned Drinks"
  | "Air Buah"
  | "Others"
  | "Desserts";

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
