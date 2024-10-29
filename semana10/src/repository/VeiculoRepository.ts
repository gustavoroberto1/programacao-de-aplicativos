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

    async save(veiculo: Veiculo){
        try {
            this.connection.connect()
            const sql = "INSERT INTO veiculos (id, modelo, cor, ano, valor, placa, imagem) VALUES ($1, $2, $3, $4, $5, $6, $7)";
            const values = [veiculo.getId(), veiculo.getModelo(), veiculo.getCor(), veiculo.getAno(), veiculo.getPreco(), veiculo.getPlaca(), veiculo.getImagem()];
            await this.connection.query(sql, values);  
        } catch (error) {
            console.log(error)
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }

}
