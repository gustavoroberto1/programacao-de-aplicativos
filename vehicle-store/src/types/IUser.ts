export type IUser = {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  createAt: Date;
  updateAt: Date;
}

export type IAuthPassword = {
  password: string;
  password_hash: string;
}