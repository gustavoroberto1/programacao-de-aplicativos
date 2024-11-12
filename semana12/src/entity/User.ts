import { v4 as uuid } from 'uuid';

export default class User{
  private id: string;
  private name: string;
  private email: string;
  private password: string;
  
  constructor(name: string, email: string, password: string) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public getId() {
    return this.id;
  }

  public getName(){
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }
}