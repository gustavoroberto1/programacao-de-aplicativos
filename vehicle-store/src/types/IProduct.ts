export type IProductCreate = {
  name: string;
  category: string;
  manufacturer: string;
  amount: number;
}

export interface IProductResponse  {
  id: string;
  name: string;
  category: string;
  manufacturer: string;
  amount: number;
  updateAt: Date;
  createAt: Date;
}