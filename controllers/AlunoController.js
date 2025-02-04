import Aluno from "../models/Aluno.js"


class AlunoController{
    index = function(req,res){
        res.render('aluno')
    }

    cadastrar = async function(req,res){
        const alunos = await Aluno.findAll()
        res.render('aluno/cadastrar', {alunos: alunos}) 
    }

    salvar = function(req,res){
        
        let aluno = {
            nome: req.body.nome,
            telefone: req.body.telefone,
            email: req.body.email,
            nota: req.body.nota,
            situacao: 'aprovado'
        }

        Aluno.create(aluno).then(function(){
            console.log('Aluno cadastrado com sucesso!')
            res.redirect('/')
        })
    }
}

export default new AlunoController()