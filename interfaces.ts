import { Role } from "./enums";

export interface UserPayload {
  username: string;
  email: string;
  name: string;
  role: Role;
  avatar: string;
}
