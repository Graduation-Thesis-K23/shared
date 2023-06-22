import { USER_ROLE } from "./constants";
import { Role } from "./enums";

export interface CategoryType {
  id: number;
  src: string;
  textKey: string;
  href: string;
}

export interface UserPayload {
  username: string;
  name: string;
  photo?: string;
  role: typeof USER_ROLE;
}

export interface EmployeePayload {
  phone: string;
  name: string;
  role: Role;
}

export interface ProductListType {
  id: string;
  name: string;
  price: number;
  sale: number;
  images: string[];
  created_at: string;
  slug: string;
  sold: number;
  rating: number;
  expiry_date: string;
  isHot: boolean;
}

export interface ProductType extends ProductListType {
  description: string;
  specifications: string;
  category: string;
  numberOfComments: number;
}
