import { Entity, PrimaryGeneratedColumn, Column,  } from "typeorm"

@Entity()
export default class Product {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({
        nullable: false,
        unique: true,
    })
    name:string

    @Column({
        nullable: false
    })
    price:number

    @Column({
        nullable: true,
    })
    imageurl:string 


    constructor(name:string, price:number, imageurl:string){
        this.name = name
        this.price = price
        this.imageurl = imageurl
    }
}