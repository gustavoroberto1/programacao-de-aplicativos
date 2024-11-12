import { ipcMain } from 'electron';
import Veiculo from '../entity/Veiculo';
import VeiculoRepository from '../repository/VeiculoRepository';
import IVeiculo from '../types/IVeiculo';

export default class VeiculoController {
    constructor() {
        this.initialize();
    }

    private initialize() {
        ipcMain.handle('create', async (_: any, veiculo: IVeiculo) => {
            const { modelo, ano, cor, preco, placa, imagem } = veiculo;
            const novoVeiculo = new Veiculo(modelo, cor, ano, preco, placa, imagem);
            return await new VeiculoRepository().save(novoVeiculo);
        });

        ipcMain.handle('findAll', async () => {
            return await new VeiculoRepository().findAll();
        });

        ipcMain.handle('findById', async (_: any, id: string) => {
            return await new VeiculoRepository().findById(id);
        });

        ipcMain.handle('delete', async (_: any, id: string) => {
            await new VeiculoRepository().delete(id);
        });
    }
}
