import { Router } from "express";
import {register, login, getAllProducts } from "../controllers/controllers";


const router = Router()


router.post("/users", register)
router.post ("/login", login)
router.get("/products",getAllProducts)


export default router