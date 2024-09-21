import { Model } from "sequelize";
import db from '../shared/models/index';
import sequelize from "sequelize";

class Meliponicultor extends Model {
    declare id: number;
    declare name: string;
    declare phoneNumber: string;
    declare email: string;
}

Meliponicultor.init({
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: sequelize.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize.STRING,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'meliponicultor',
    underscored: true,
    timestamps: false
});

export default Meliponicultor;