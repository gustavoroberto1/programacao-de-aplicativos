import { Client } from "pg";
import Product from "../entity/Product";

export default class ProductRepository {
    private connection: Client;

    constructor() {
        if(!this.connection){
            this.connection = new Client({
                host: "localhost",
                port: 5432,
                database: 'sa',
                user: 'postgres',
                password: 'senai'
            });
        }
    }

    public async save(product: Product) {
        try {
            this.connection.connect();
            const sql = "INSERT INTO product (id, name, category, manufacturer, amount, updateAt, createAt) VALUES ($1, $2, $3, $4, $5, $6, $7)";
            const values = [
                product.getId(),
                product.getName(),
                product.getCategory(),
                product.getManufacturer(),
                product.getAmount(),
                product.getUpdateAt(),
                product.getCreateAt()
            ]

            await this.connection.query(sql, values)
        }catch(error: any){
            console.log(error)
        }finally{
            this.connection.end()
        }
    }


    public async findAll() {
        try {
            this.connection.connect();
            const sql = "SELECT * FROM product";
            
            const response = await this.connection.query(sql);
    
            return response.rows;
        }catch(error: any){
            console.log(error)
        }finally {
            this.connection.end();
        }
    }

    public async findAmountByCategory() {
        try {
            this.connection.connect();
            const sql = "SELECT category, SUM(amount) as amount FROM product GROUP BY category ORDER BY amount ASC";
            const response = await this.connection.query(sql);
            return response.rows;
        }catch(error: any){
            console.log(error)
        }finally {
            this.connection.end();
        }
    }
}