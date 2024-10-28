import { Client } from "pg";
import { Carro } from "src/entity/Carro";

class CarroRepository {
  private connection: Client;
  constructor() {
    if(this.connection == undefined){
      this.connection = new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'carro',
        password: 'postgres',
        port: 5432,
      });
    }
  }

  async createNewCar(carro: Carro) {
    try {
      await this.connection.connect();
      const query = `INSERT INTO veiculo (id, modelo, cor, ano, preco, placa, imagem) VALUES ($1, $2, $3, $4, $5, $6, $7);`;
      const values = [carro.getId(), carro.getModelo(), carro.getCor(), carro.getAno(), carro.getPreco(), carro.getPlaca(), carro.getImage()];
      await this.connection.query(query, values);
    }catch(err: any){
      console.log(err)
    }finally {
      await this.connection.end();
    }
  }
}

export default CarroRepository;