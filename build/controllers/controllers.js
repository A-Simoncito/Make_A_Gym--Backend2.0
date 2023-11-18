"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.login = exports.register = void 0;
const users_1 = require("../models/users");
const users = [];
const register = (req, res) => {
    const { email, password } = req.body;
    if (email == null || password == null) {
        return res.status(400).json({
            msg: "El email y la contraseña son obligatorios",
        });
    }
    let existUser = false;
    users.forEach((e) => {
        if (email == e.email) {
            existUser = true;
            return;
        }
    });
    if (existUser) {
        return res.status(400).json({
            msg: `email ${email} ya en uso`,
        });
    }
    const user = new users_1.Users(email, password);
    users.push(user);
    res.status(201).json({
        msg: "Usuario creado",
        user,
    });
};
exports.register = register;
const login = (req, res) => {
    const { email, password } = req.body;
    if (email == null || password == null) {
        return res.status(400).json({
            msg: "El email y la contraseña son obligatorios",
        });
    }
    let user = null;
    for (const userInUsers of users) {
        if (userInUsers.email == email) {
            user = userInUsers;
            break;
        }
    }
    if (user == null)
        return res.json({
            msg: "Usuario no encontrado",
        });
    if (password != user.password) {
        return res.status(400).json({
            msg: "Contraseña incorrecta",
        });
    }
    return res.json({
        msg: "Sesion iniciada",
        user,
    });
};
exports.login = login;
const getAllProducts = (_, res) => {
    console.table(users);
    const products = [
        {
            nombre: "Press de Banca",
            precio: 900,
            caracteristicas: "Maquina de pecho",
        },
        {
            nombre: "Press inclinado",
            precio: 950,
            caracteristicas: "Maquina de Pecho",
        },
        {
            nombre: "Press declinado",
            precio: 750,
            caracteristicas: "Maquina de Pecho",
        },
        {
            nombre: "Prensa 45°",
            precio: 1100,
            caracteristicas: "Maquina de Piernas",
        },
        {
            nombre: "Sillon cuadriceps",
            precio: 400,
            caracteristicas: "Maquina de Piernas",
        },
        {
            nombre: "Gemelos",
            precio: 420,
            caracteristicas: "Maquina de Pierna",
        },
        {
            nombre: "Dorsalera",
            precio: 940,
            caracteristicas: "Maquina de Espalda",
        },
        {
            nombre: "Remo",
            precio: 320,
            caracteristicas: "Maquina de Espalda",
        },
        {
            nombre: "Barra de Dominadas",
            precio: 90,
            caracteristicas: "Maquina de Espalda",
        },
    ];
    res.json({
        products,
    });
};
exports.getAllProducts = getAllProducts;
