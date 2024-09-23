import { Model } from "sequelize";
import db from '../shared/models/index';
import sequelize from "sequelize";
import Meliponicultor from "./Meliponicultor";

class Bait extends Model {
    declare id: number;
    declare meliponicultorId: number;
    declare mlQuantity: number;
    declare beeSpecie: string;
    declare installationDate: string;
    declare captureStatus: boolean;
    declare allowedTransfer: boolean;
}

Bait.init({
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    meliponicultorId: {
        type: sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'meliponicultor',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    mlQuantity: {
        type: sequelize.INTEGER,
        allowNull: false
    },
    beeSpecie: {
        type: sequelize.STRING,
        allowNull: false
    },
    installationDate: {
        type: sequelize.DATE,
        allowNull: false
    },
    captureStatus: {
        type: sequelize.BOOLEAN,
        allowNull: false
    },
    allowedTransfer: { 
        type: sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize: db,
    tableName: 'bait',
    underscored: true,
    timestamps: false
});

Bait.belongsTo(Meliponicultor, {
    foreignKey: 'meliponicultorId',
    as: 'meliponicultor'
})

export default Bait;