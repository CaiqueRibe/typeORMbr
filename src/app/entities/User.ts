import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

//espelho do BD
@Entity("users")
class User {
   @PrimaryGeneratedColumn("increment")
   id: number

   @Column("varchar", { length: 100, nullable: false })
   name: string

   @Column("varchar", { length: 100, nullable: false })
   email: string
}

export default User
