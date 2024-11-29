import { v4 as uuid } from 'uuid';

export default class Product {
  private id: string;
  private name: string;
  private category: string;
  private manufacturer: string;
  private amount: number;
  private updateAt: Date;
  private createAt: Date;
  
  constructor(name: string, category: string, manufacturer: string, amount: number, id?: string){
    this.id = id ? id : uuid();
    this.name = name;
    this.category = category;
    this.manufacturer = manufacturer;
    this.amount = amount;
    this.updateAt = new Date();
    this.createAt = new Date();
  }

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getCategory() {
    return this.category;
  }

  public getManufacturer() {
    return this.manufacturer;
  }

  public getAmount() {
    return this.amount;
  }

  public getUpdateAt() {
    return this.updateAt;
  }

  public getCreateAt() {
    return this.createAt;
  }
}
