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
          const producto4 = new Product("Dorsalera", 200,"https://jbh.com.ar/wp-content/uploads/2020/11/dorsalera-alta-gold-2-scaled.jpg");
          const producto5 = new Product ("Hombros", 640,"https://jbs-fitness.es/wp-content/uploads/2020/07/Palanca-para-Brazo-y-Hombro-Press-de-Hombros-Strength-1.jpg");
          const producto6 = new Product ("Espalda Poleas",1200, "https://www.rocfit.com/gimnasio-casa/3668-home_default/mi5-functional-trainer.jpg");
          const producto7 = new Product ("Prensa 45°", 1900,"https://jbh.com.ar/wp-content/uploads/2020/10/prensa-45-gold-2-scaled.jpg");
          const producto8 = new Product ("Sillon Cuadriceps", 300, "https://jbh.com.ar/wp-content/uploads/2020/11/sillon-cuadriceps-gold-scaled.jpg");
          const producto9 = new Product ("Gemelos y Sentadillas", 910, "https://d28hi93gr697ol.cloudfront.net/586d6ca1-ace0-eb27-9e0b-2d0d3c3c6062/img/Producto/fe98b3ff-0855-2752-75b9-93a14718edfb/sentadilla-632114235ea35.jpg");



          await productRepository.save([producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9]);
          console.log("La base anda");
    }})

    .catch((error) => {
        console.log(error)

    })

console.log("LLega")