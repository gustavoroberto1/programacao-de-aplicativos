import { app, BrowserWindow } from 'electron';
import ScreenController from './controller/ScreenController';
import UserController from './controller/UserController';
import VeiculoController from './controller/VeiculoController';

declare const LOGIN_PRELOAD_WEBPACK_ENTRY: string;

declare const LOGIN_WEBPACK_ENTRY: string;
declare const HOME_WEBPACK_ENTRY: string;
declare const DETAILS_WEBPACK_ENTRY: string;

if (require('electron-squirrel-startup')) {
  app.quit();
}

let mainWindow: BrowserWindow;
const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: LOGIN_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(LOGIN_WEBPACK_ENTRY);

  mainWindow.webContents.openDevTools();
};

app.on('ready', () => {
  createWindow();
  new VeiculoController();
  new ScreenController(mainWindow);
  new UserController();
});

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

// ipcMain.handle('create', async (_: any, veiculo: any) => {
//   const { id, modelo, cor, ano, preco, placa, imagem } = veiculo;
//   const novoVeiculo = new Veiculo(modelo, cor, ano, preco, placa, imagem, id);
//   new VeiculoRepository().save(novoVeiculo);
// })

// ipcMain.handle('findAll', async () => {
//   return await new VeiculoRepository().findAll();
// })

// ipcMain.handle('findById', async (_: any, id: string) => {
//   return await new VeiculoRepository().findById(id);
// })

// ipcMain.handle('deletarVeiculo', async (_: any, id: string) => {
//   await new VeiculoRepository().delete(id);
// })

// ipcMain.on("change-screen", (_: any, id: string) => {
//   mainWindow.loadURL(DETAILS_WEBPACK_ENTRY + `?id=${id}`)
// })

// ipcMain.on("change-screen-home", () => {
//   mainWindow.loadURL(HOME_WEBPACK_ENTRY)
// })