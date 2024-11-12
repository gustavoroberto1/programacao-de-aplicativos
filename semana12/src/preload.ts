import { contextBridge, ipcRenderer } from "electron";
import IUser from "./types/IUser";
import IVeiculo from "./types/IVeiculo";

contextBridge.exposeInMainWorld('bancoVeiculoAPI', {
    create: async (veiculo: IVeiculo) => await ipcRenderer.invoke('create', veiculo),
    findAll: async () => await ipcRenderer.invoke('findAll'),
    findById: async (id: string) => await ipcRenderer.invoke('findById', id),
    delete: async (id: string) => await ipcRenderer.invoke('delete', id),
})

contextBridge.exposeInMainWorld('bancoUserAPI', {
    create: async (user: IUser) => await ipcRenderer.invoke('create_user', user),
})

contextBridge.exposeInMainWorld("navigateAPI", {
    irPaginaDetalhes: (id: string) => ipcRenderer.send("change-screen", id),
    irPaginaHome: () => ipcRenderer.send("change-screen-home"),
})