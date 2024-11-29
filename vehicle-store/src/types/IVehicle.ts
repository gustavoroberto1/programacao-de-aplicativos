export type IVehicleCreate = {
  model: string;
  type: string;
  brand: string;
  chassi: string;
}

export type IVehicleResponse = {
  id: string;
  model: string;
  type: string;
  brand: string;
  chassi: string;
  yearOfManufacture: number;
  updateAt: Date;
  createAt: Date;
}