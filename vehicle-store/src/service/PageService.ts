import { BrowserWindow, ipcMain } from "electron";

export default class PageController {
  private mainWindow: BrowserWindow;

  constructor(mainWindow: BrowserWindow) {
    this.mainWindow = mainWindow;
    this.initialize(); 
  }

  private initialize() {
    ipcMain.on("change_page", (_: any, path: string) => {
      this.mainWindow.loadURL(`http://localhost:3000/${path}`);
    });
  }
}