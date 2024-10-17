import { DataTypes } from "sequelize";
import { Column, Model, Table } from "sequelize-typescript";


@Table({timestamps: true, tableName: 'users'})
export class UserModel extends Model{
    @Column({type: DataTypes.STRING, allowNull: false})
    name: string

    @Column({type: DataTypes.STRING, allowNull: false, unique: true})
    email: string

    @Column({type: DataTypes.STRING, allowNull: false, unique: true})
    phone: string

    @Column({type: DataTypes.STRING, allowNull: false})
    image: string
}