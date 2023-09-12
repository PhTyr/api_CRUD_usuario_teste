const express = require('express')
const { cadastrarUsuario, atualizarUsuario, ListarUsuarios, deletarUsuario } = require('./controladores/usuarios')

const rotas = express()


rotas.get('/usuarios/:id', ListarUsuarios)

rotas.post('/usuarios', cadastrarUsuario)

rotas.put('/usuarios/:id', atualizarUsuario)

rotas.delete('/usuarios/:id', deletarUsuario)

module.exports = rotas