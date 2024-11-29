import { contextBridge, ipcRenderer } from "electron";
import { IProductCreate, IProductResponse } from "./types/IProduct";
import { IQualityCreate, IQualityResponse } from "./types/IQuality";
import { IAuthPassword } from "./types/IUser";
import { IVehicleCreate, IVehicleResponse } from "./types/IVehicle";

contextBridge.exposeInMainWorld("userAPI", {
  findByEmail: async (email: string): Promise<IVehicleResponse> => await ipcRenderer.invoke("findUserByEmail", email),
})

contextBridge.exposeInMainWorld("authAPI", {
  comparePassword: async (passwords: IAuthPassword) => await ipcRenderer.invoke("comparePassword", passwords)
})

contextBridge.exposeInMainWorld("navigateAPI", {
  toPage: async (path: string) => await ipcRenderer.send("change_page", path)
})

contextBridge.exposeInMainWorld("productAPI", {
  createProduct: async (product: any) => await ipcRenderer.invoke("create_product", product),
  findAll: async () => await ipcRenderer.invoke("find_all_product"),
  findAmountByCategory: async () => await ipcRenderer.invoke("find_amount_by_category")
})

