import { Client } from "pg";
import Veiculo from "src/entity/Veiculo";

export default class VeiculoRepository {
    private connection: Client

    constructor() {
        if(!this.connection){
            this.connection = new Client({
                host: "localhost",
                port: 5432,
                database: 'revenda',
                user: 'postgres',
                password: 'senai'
            });
        }
    }

    async saveVeiculo(carro: Veiculo) {
        try {
          await this.connection.connect();
          const query = `INSERT INTO veiculo (id, modelo, cor, ano, preco, placa, imagem) VALUES ($1, $2, $3, $4, $5, $6, $7);`;
          const values = [carro.getId(), carro.getModelo(), carro.getCor(), carro.getAno(), carro.getPreco(), carro.getPlaca(), carro.getImagem()];
          await this.connection.query(query, values);
        }catch(err: any){
          console.log(err)
        }finally {
          await this.connection.end();
        }
    }

    async findAll(): Promise<Veiculo[]> {
        const veiculos: Veiculo[] = [];
    
        try {
            await this.connection.connect();
            const query = `SELECT id, modelo, cor, ano, preco, placa, imagem FROM veiculo;`;
            const result = await this.connection.query(query);
    
            if (result.rows.length > 0) {
                for (const row of result.rows) {
                    const { id, modelo, cor, ano, preco, placa, imagem } = row;
                    const veiculo = new Veiculo(id, modelo, cor, ano, preco, placa, imagem);
                    veiculos.push(veiculo);
                }
            } else {
                console.log('Nenhum veículo encontrado');
            }
        } catch (err: any) {
            console.log(err);
        } finally {
            await this.connection.end();
        }
    
        return veiculos;
    }

    async findById(id: string) {
        try {
            await this.connection.connect();
            const query = `SELECT id, modelo, cor, ano, preco, placa, imagem FROM veiculo WHERE id = $1;`;
            const values = [id];
            const result = await this.connection.query(query, values);
    
            if (result.rows.length > 0) {
                const veiculo = result.rows[0];
                return veiculo;
            } else {
                console.log('Veículo não encontrado');
                return null;
            }
        } catch (err: any) {
            console.log(err);
            return null;
        } finally {
            await this.connection.end();
        }
    }

    async desativarVeiculo(id: string): Promise<void> {
        try {
            await this.connection.connect();
            const query = `UPDATE veiculo SET ativo = false WHERE id = $1;`;
            const values = [id];
    
            const result = await this.connection.query(query, values);
            if (result.rowCount > 0) {
                console.log(`Veículo com id ${id} desativado com sucesso.`);
            } else {
                console.log(`Nenhum veículo encontrado com id ${id}.`);
            }
        } catch (err: any) {
            console.log(err);
        } finally {
            await this.connection.end();
        }
    }
    
}