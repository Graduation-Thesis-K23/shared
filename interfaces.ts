import { Role } from "./enums";

export interface UserPayload {
  username: string;
  email: string;
  name: string;
  role: Role;
  avatar: string;
}

export interface User {
  id: string;
}

export interface User1 {
  id: string;
}
