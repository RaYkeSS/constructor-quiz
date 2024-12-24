export type QueryUser = {email: string}

export type LoginUser = {
  email: string;
  password: string;
}

export interface MutationAddUser {
  email: string
  password: string
  name: string
}

