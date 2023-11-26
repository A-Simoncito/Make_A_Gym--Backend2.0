import express from "express";
import cors from "cors"
import router from "../routes/routes";
import 'reflect-metadata';
import '../db/db';




// export class Server {
//     private expressApp: Application= express()

//     public init = ()  => {

//         this.expressApp.use(cors())
//         this.expressApp.use(express.json())
//         this.expressApp.use(router)
//         this.expressApp.listen(8080)

//     }
// }

const app = express();
const port = 8080;

app.use(cors());

app.use(express.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});