const knex = require("../conexao")


const ListarUsuarios = async (req, res) => {
    const { id } = req.params

    try {
        const usuarios = await knex('usuarios').where({ id })

        return res.status(200).json(usuarios)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro no servidor.' })
    }
}

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body

    try {
        const usuarioCadastrado = await knex('usuarios').insert({ nome, email, senha }).returning('*')

        return res.status(200).json(usuarioCadastrado)

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro no servidor.' })
    }


}

const atualizarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body
    const { id } = req.params

    try {
        const usuarioAtualizado = await knex('usuarios').update({ nome, email, senha }).where('id', id).returning('*')

        return res.status(200).json(usuarioAtualizado)

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro no servidor.' })
    }
}

const deletarUsuario = async (req, res) => {
    const { id } = req.params

    try {

        const usuarioDeletado = await knex('usuarios').del().where({ id }).returning('*')

        return res.status(200).json(usuarioDeletado)

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro no servidor.' })
    }
}

module.exports = {
    cadastrarUsuario,
    atualizarUsuario,
    ListarUsuarios,
    deletarUsuario
}