const usuarios = [{
        id: 1,
        nome: 'Ana da Web',
        email: 'fsafha@gmauk,ciom',
        idade: 23,
        perfil_id: 1,
        status: 'ATIVO'
    }, {
        id: 2,
        nome: 'Rafa',
        email: 'dad@gmauadak,ciaom',
        idade: 25,
        perfil_id: 2,
        status: 'INATIVO'
    },
    {
        id: 3,
        nome: 'Web',
        email: 'sdf@gmaukaa,cioam',
        idade: 26,
        perfil_id: 1,
        status: 'BLOQUEADO'
    }
]

const perfis = [{
        id: 1,
        nome: 'Comum'
    },
    {
        id: 2,
        nome: 'Administrador'
    }
]

module.exports = {
    usuarios,
    perfis
}