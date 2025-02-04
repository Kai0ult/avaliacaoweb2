import express from 'express'
import AlunoController from '../controllers/AlunoController.js'
const router = express.Router()

router.get('/aluno', AlunoController.index)
router.get('/cadastrar', AlunoController.cadastrar)
router.post('/salvar', AlunoController.salvar)

export default router