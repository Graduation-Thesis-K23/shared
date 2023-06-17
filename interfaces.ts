import { USER_ROLE } from "../auth/constants";
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
  photo?: string;
  role: Role;
}
