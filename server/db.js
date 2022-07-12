const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_POSTGRES_NAME,
    process.env.DB_POSTGRES_USER,
    process.env.DB_POSTGRES_PASSWORD,
    {
        host:process.env.DB_POTGRES_HOST,
        port:process.env.DB_POSTGRES_PORT,
        dialect:'postgres'
    }
)

module.exports = sequelize;