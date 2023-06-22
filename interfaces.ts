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
  isHot: boolean;
}

export interface ProductType extends ProductListType {
  description: string;
  specifications: string;
  category: string;
  numberOfComments: number;
}

export interface FamiliarProduct
  extends Pick<
    ProductType,
    "id" | "name" | "price" | "images" | "sale" | "slug"
  > {
  create_at: string;
}

// branch.chainmart.site
export interface EmployeeType {
  id: string;
  name: string;
  phone: string;
  createAt: string;
  isActive: boolean;
}

export interface OrderType {
  id: string;
  status: string;
}

export interface BatchType {
  id: string;
  name: string;
}