const {DataTypes} = require('sequelize');

const createProductModel = (sequelize) => {
    return sequelize.define('Product',
    {
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        sale:{
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
        {
            tableName : "products",
            timestamps : true,
        }
    );
};

module.exports = {
    createProductModel,
}