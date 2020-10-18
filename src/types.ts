export type Action = {
  type: string;
  payload: any;
};

export type Company = {
  id: number;
  name: string;
  logo: string;
  facebookId: string;
  tokenFacebook: string;
  category: string;
};

export type Role = {
  id: number;
  name: string;
  code: number;
};

export type User = {
  id: number;
  token: string;
  username: string;
  password: string;
  active: boolean;
  name: string;
  lastname: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  company_id: number;
  company: Company;
  role_id: number;
  role: Role;
};

export type UserState = User;
