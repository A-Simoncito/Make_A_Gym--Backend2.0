"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server.js");
require("./db/db");
const server = new server_1.Server();
server.init();
console.log("Servidor andando");
