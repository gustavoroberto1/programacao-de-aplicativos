import { app, BrowserWindow, ipcMain } from 'electron';
import Veiculo from './entity/Veiculo';
import VeiculoRepository from './repository/VeiculoRepository';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
declare const DETALHES_WEBPACK_ENTRY: string;

if (require('electron-squirrel-startup')) {
  app.quit();
}

var mainWindow: BrowserWindow;
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

ipcMain.handle('create', async (_: any, veiculo: any) => {
  const { id, modelo, cor, ano, preco, placa, imagem } = veiculo;
  const novoVeiculo = new Veiculo(modelo, cor, ano, preco, placa, imagem, id);
  new VeiculoRepository().save(novoVeiculo);
})

ipcMain.handle('findAll', async () => {
  return await new VeiculoRepository().findAll();
})

ipcMain.handle('findById', async (_: any, id: string) => {
  return await new VeiculoRepository().findById(id);
})

ipcMain.handle('deletarVeiculo', async (_: any, id: string) => {
  await new VeiculoRepository().delete(id);
})

ipcMain.on("change-screen", (_: any, id: string) => {
  mainWindow.loadURL(`http://localhost:3000/detalhes?id=${id}`)
})

ipcMain.on("change-screen-home", () => {
  mainWindow.loadURL("http://localhost:3000/main_window")
})