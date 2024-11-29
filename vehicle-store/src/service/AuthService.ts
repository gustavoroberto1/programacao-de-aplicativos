import { compare } from "bcrypt";
import { ipcMain } from "electron";
import { IAuthPassword } from "../types/IUser";

export default class AuthController {
  constructor() {
    this.initialize(); 
  }

  private initialize() {
    ipcMain.handle('comparePassword', async (_: any, credentials: IAuthPassword) => {
      const { password, password_hash } = credentials;
      return await compare(password, password_hash);
    })
  }
}