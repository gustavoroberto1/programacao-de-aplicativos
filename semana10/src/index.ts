import { app, BrowserWindow, ipcMain } from 'electron';
import VeiculoRepository from './repository/VeiculoRepository';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

let mainWindow: BrowserWindow;

const veiculoRepository = new VeiculoRepository();

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.handle('create', async (event: any, veiculo: any) => {
  await veiculoRepository.saveVeiculo(veiculo);
})

ipcMain.handle('load', async () => {
  return veiculoRepository.findAll();
})

ipcMain.on('show-view-main', () => {
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY)
});

ipcMain.on('show-view-specific-veiculo', () => {
  mainWindow.loadURL("http://localhost:3000/specific-veiculo")
});