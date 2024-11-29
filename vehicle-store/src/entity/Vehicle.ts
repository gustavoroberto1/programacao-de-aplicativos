import { v4 as uuid } from 'uuid';

export default class Vehicle {
  private id: string;
  private model: string;
  private type: string;
  private brand: string;
  private chassi: string;
  private yearOfManufacture: number;
  private updateAt: Date;
  private createAt: Date;

  constructor(model: string, type: string, brand: string, chassi: string, id?: string){
    this.id = id ? id : uuid();
    this.model = model;
    this.type = type;
    this.brand = brand;
    this.chassi = chassi;
    this.yearOfManufacture = new Date().getFullYear()
    this.updateAt = new Date();
    this.createAt = new Date();
  }

  public getId() {
    return this.id;
  }

  public getModel() {
    return this.model;
  }

  public getType() {
    return this.type;
  }

  public getBrand() {
    return this.brand;
  }

  public getChassi() {
    return this.chassi;
  }

  public getYearOfManufacture() {
    return this.yearOfManufacture;
  }

  public getUpdateAt() {
    return this.updateAt;
  }

  public getCreateAt() {
    return this.createAt;
  }
}