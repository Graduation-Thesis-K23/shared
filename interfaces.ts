export interface UserPayload {
  username: string;
  email: string;
  name: string;
  photo: string;
}

export interface CategoryType {
  id: number;
  src: string;
  textKey: string;
  href: string;
}
