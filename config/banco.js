import Sequelize from 'sequelize'

const DB_NAME = 'prova'
const USER_NAME = 'root'
const PASSWORD = 'sz0038db'
const HOST = 'localhost'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
    //timezone: '-03:00',
})

sequelize.authenticate().then(function (){
    console.log('Conectado ao banco com sucesso!.');
}).catch(function (error) {
    console.log('Falha na conexão: '+error);
})

export default {Sequelize, sequelize}