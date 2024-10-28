import { contextBridge, ipcRenderer } from "electron";
import { Carro } from "./entity/Carro";

contextBridge.exposeInMainWorld('electronAPI', {
  invokeDatabase: async (carro: Carro) => {
    await ipcRenderer.invoke('teste', carro)
  },
  test: (screen: string) => {
    ipcRenderer.send('change-screen', screen)
  },
});