const knex = require("../conexao")


const ListarUsuarios = async (req, res) => {
    const { id } = req.params

    try {
        const usuarios = await knex('usuarios').where({ id }).first()

        if (!usuarios) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' })
        }

        return res.status(200).json(usuarios)
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro no servidor.' })
    }
}

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body

    try {
        const usuarioCadastrado = await knex('usuarios').insert({ nome, email, senha }).returning('*')

        if (usuarioCadastrado.length === 0) {
            return res.status(400).json({ mensagem: 'Não foi possível cadastrar o usuário' })
        }
        return res.status(200).json(usuarioCadastrado[0])

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro no servidor.' })
    }


}

const atualizarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body
    const { id } = req.params

    try {
        const usuarioExiste = await knex('usuarios').where({ id }).first()

        if (!usuarioExiste) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' })
        }
        const usuarioAtualizado = await knex('usuarios').update({ nome, email, senha }).where('id', id).returning('*')

        return res.status(200).json(usuarioAtualizado)

    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro no servidor.' })
    }
}

const deletarUsuario = async (req, res) => {
    const { id } = req.params

    try {
        const usuarioExiste = await knex('usuarios').where({ id }).first()

        if (!usuarioExiste) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' })
        }

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