"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("../routes/routes"));
class Server {
    constructor() {
        this.expressApp = (0, express_1.default)();
        this.init = () => {
            this.expressApp.use((0, cors_1.default)());
            this.expressApp.use(express_1.default.json());
            this.expressApp.use(routes_1.default);
            this.expressApp.listen(8080);
        };
    }
}
exports.Server = Server;
