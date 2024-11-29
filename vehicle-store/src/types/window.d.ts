import { IAuthPassword, IUser } from "./IUser";

export { };

declare global {
    interface Window {
      navigateAPI: {
        toPage:  (path: string) =>  void;
      },
      userAPI: {
        findByEmail: (email: string) => Promise<IUser>
      },
      authAPI: {
        comparePassword: (passwords: IAuthPassword) => Promise<boolean>
      }
    }
}