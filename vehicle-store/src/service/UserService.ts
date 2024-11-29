import { ipcMain } from "electron";
import { IUser } from "../types/IUser";

export default class UserController {
  constructor() {
    this.initialize(); 
  }

  private initialize() {
    ipcMain.handle("findUserByEmail", (_: any, email: string) => {
      return {
        id: "1",
        name: "Gustavo",
        email: "gustavo@gmail.com",
        password_hash: "123123",
        createAt: new Date(),
        updateAt: new Date()
      } as IUser
    });
  }
}