import banco from "../config/banco.js"

const Aluno = banco.sequelize.define('alunos', {
    id:{
        type:banco.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome:{
        type: banco.Sequelize.STRING
    },
    telefone:{
        type:banco.Sequelize.STRING
    },
    email:{
        type: banco.Sequelize.STRING
    },
    nota:{
        type: banco.Sequelize.FLOAT
    },
    situacao:{
        type: banco.Sequelize.STRING
    }
})

Aluno.sync()

export default Aluno