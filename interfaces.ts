import { ParsedUrlQuery } from "querystring";

import { USER_ROLE } from "./constants";
import { OrderStatus, Role } from "./enums";

// export const USER_ROLE_TEST = 1;

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
  branch: string;
}

export interface ProductListType {
  id: string;
  name: string;
  price: number;
  sale: number;
  images: string[];
  created_at: Date;
  slug: string;
  star: number;
  sold: number;
}

export interface ProductType extends ProductListType {
  description: string;
  specifications: string;
  category: string;
  availableQuantity?: number;
  show: boolean;
}

export interface OrderProductType
  extends Omit<ProductListType, "images" | "created_at" | "slug"> {
  quantity: number;
  product_id: string;
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
  role: string;
}

export interface OrderType {
  id: string;
  status: string;
}

export interface BatchType {
  id: string;
  created_at: Date;
  batch_code: string;
  import_quantity: number;
  import_cost: number;
  expiry_date: Date;
  sold: number;
  product: {
    name: string;
    price: number;
    sale: number;
    slug: string;
    id: string;
    product_code: string;
    category: string;
  };
  product_id: string;
  employee_create_phone: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  ignorePrice: number;
  star: number;
  sold: number;
  image: string;
  label?: number;
  slug: string;
}

export interface IProductDetail {
  id: number;
  name: string;
  price: number;
  ignorePrice: number;
  star: number;
  sold: number;
  images: string[];
  image: string;
  slug: string;
  options: object;
  maxQuantity: number;
  specifications: { [key: string]: string };
  description: string;
  familiar: Array<FamiliarProduct>;
}

export interface ICart {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
  maxQuantity: number;
  quantity: number;
}

export interface ErrorPayload {
  statusCode: number;
  message: string;
  error: string;
}

export interface SuccessPayload {
  status: string;
}

export interface SignInPayload {
  account: string;
  password: string;
}

export interface SignUpPayload {
  username: string;
  password: string;
  name: string;
  email: string;
}

export interface IParams extends ParsedUrlQuery {
  slug: string;
}

export interface Comment {
  id: string;
  created_at: number;
  star: number;
  comment?: string;
  images?: string[];
  user: {
    name: string;
    photo: string;
  };
}

export interface PaginationMetadata {
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
}

export interface PaginationResult<T> extends PaginationMetadata {
  docs: T[];
}

export interface DashboardColumn {
  label: string;
  value: number;
  pv?: number;
  amt?: number;
}

export interface OrdersType {
  id: string;
  name: string;
  phone: string;
  branchId: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  username: string;
}

export interface OrdersRender extends OrdersType {
  created_at: Date;
  user: User;
  estimated_shipped_date: Date;
  status: OrderStatus;
  total: number;
  payment: string;
}
