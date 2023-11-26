"use strict";
import "reflect-metadata";
import {Users} from "../models/users"
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
    entities: [Users]
})
AppDataSource.initialize()
    .then(() => {
        console.log("La base anda")
    })
    .catch((error) => {
        console.log(error)
    })
console.log("LLega")
