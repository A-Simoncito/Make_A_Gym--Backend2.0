// export class Users{
//     public readonly email:string
//     public readonly password:string
//     constructor(email:string,password:string){
//         this.email = email
//         this.password = password

//     }
// }

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Users {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ length: 50 })
    email: string;

    @Column({ length: 50 })
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}
