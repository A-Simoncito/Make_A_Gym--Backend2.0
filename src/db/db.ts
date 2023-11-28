import "reflect-metadata";
import Product from "../models/products"
import {DataSource} from "typeorm"
import Users from "../models/users";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "backend",
    synchronize: true,
    logging:true,
    entities: [Product,Users]
})

AppDataSource.initialize()
    .then(async() => {
        const productRepository = AppDataSource.manager.getRepository(Product);
        const existingProducts = await productRepository.find();
        if (existingProducts.length === 0) {
          const producto1 = new Product("Press De Banca", 900, "https://cdn.ossfitness.com/img/full/ASDC41%20-%20Etenon%20Press%20de%20Banca%20Am%20SS.jpg");
          const producto2 = new Product("Press Inclinado", 950, "https://jbs-fitness.es/wp-content/uploads/2020/07/PRESS-BANCA-PECHO-INCLINADO-B-020-2-scaled.jpg");
          const producto3 = new Product("Press Declinado", 750, "https://jbh.com.ar/wp-content/uploads/2020/11/banco-declinado-gold-2-scaled.jpg");

          await productRepository.save([producto1, producto2, producto3]);
          console.log("La base anda");
    }})

    .catch((error) => {
        console.log(error)

    })

console.log("LLega")