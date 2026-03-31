export type Role = "USER" | "ADMIN";

export type User = {
  id: number;
  email: string;
  password: string;
  age?: number | null;
  phoneNumber: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
};

export type SafeUser = {
  id: number;
  email: string;
  age?: number | null;
  phoneNumber: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
};
