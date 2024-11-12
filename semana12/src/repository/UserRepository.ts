import { Client } from "pg";
import User from "../entity/User";

export default class UserRepository {
    private connection: Client

    constructor() {
        if(!this.connection){
            this.connection = new Client({
                host: "localhost",
                port: 5432,
                database: 'revenda',
                user: 'postgres',
                password: 'postgres'
            });
        }
    }

    async save(user: User){
        console.log(user)
        try {
            this.connection.connect()
            const sql = "INSERT INTO users (id, name, email, password) VALUES ($1, $2, $3, $4)";
            const values = [user.getId(), user.getName(), user.getEmail(), user.getPassword()];
            await this.connection.query(sql, values);
        } catch (error) {
            console.log(error)
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }


}
