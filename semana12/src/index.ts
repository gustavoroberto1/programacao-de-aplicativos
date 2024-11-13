import { app, BrowserWindow, ipcMain } from 'electron';
import Veiculo from './entity/Veiculo';
import VeiculoRepository from './repository/VeiculoRepository';
import UsuarioRepository from './repository/UsuarioRepository';
import Usuario from './entity/Usuario';
import { compare, hash } from 'bcrypt';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
declare const DETALHES_WEBPACK_ENTRY: string;
declare const LOGIN_WEBPACK_ENTRY: string;

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

  mainWindow.loadURL("http://localhost:3000/login");

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

ipcMain.handle('createUsuario', async (_: any, usuario: any) => {
  const { name, email, password, data_nascimento } = usuario;
  console.log("Inicio geração")
  const passwordHash = await hash(password, 12);
  console.log(passwordHash)
  const newUsuario = new Usuario(name, email, passwordHash, data_nascimento);
  await new UsuarioRepository().save(newUsuario);
})

ipcMain.handle('findByEmail', async (_: any, email: string) => {
  return await new UsuarioRepository().findByEmail(email);
})

ipcMain.handle('hash_password', async (_: any, credentials: any) => {
  const { password, password_hash } = credentials;
  return await compare(password, password_hash);
})

ipcMain.on("change-screen", (_: any, id: string) => {
  mainWindow.loadURL(`http://localhost:3000/detalhes?id=${id}`)
})

ipcMain.on("change-screen-home", () => {
  mainWindow.loadURL("http://localhost:3000/main_window")
})