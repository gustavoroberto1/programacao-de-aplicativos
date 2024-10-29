import { Client } from "pg";

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



}
