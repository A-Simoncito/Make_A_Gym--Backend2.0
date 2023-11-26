import "reflect-metadata";
import Product from "../models/products"
import {DataSource} from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "aeet9560",
    database: "backend",
    synchronize: true,
    logging:true,
    entities: [Product]
})

AppDataSource.initialize()
    .then(() => {
        console.log("La base anda")
    })
    .catch((error) => {
        console.log(error)

    })

console.log("LLega")