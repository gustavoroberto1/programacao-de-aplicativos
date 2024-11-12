import { hash } from 'bcrypt';
import { ipcMain } from 'electron';
import User from '../entity/User';
import UserRepository from '../repository/UserRepository';
import IUser from '../types/IUser';


export default class UserController {
    constructor() {
        this.initialize();
    }

    private initialize() {
        ipcMain.handle('create_user', async (_: any, user: IUser) => {
            const { name, email, password } = user;
            const passwordHashed = await hash(password, 10)
            const novoUser = new User(name, email, passwordHashed);
            return await new UserRepository().save(novoUser);
        })
    }
}
