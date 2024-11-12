import { BrowserWindow, ipcMain } from 'electron';

declare const HOME_WEBPACK_ENTRY: string;
declare const DETAILS_WEBPACK_ENTRY: string;

export default class ScreenController {
    private mainWindow: BrowserWindow;

    constructor(mainWindow: BrowserWindow) {
        this.mainWindow = mainWindow;
        this.initialize();
    }

    private initialize() {
        ipcMain.on("change-screen", (_: any, id: string) => {
            this.mainWindow.loadURL(DETAILS_WEBPACK_ENTRY + `?id=${id}`);
        });

        ipcMain.on("change-screen-home", () => {
            this.mainWindow.loadURL(HOME_WEBPACK_ENTRY);
        });
    }
}
