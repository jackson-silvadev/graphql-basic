const {
    usuarios,
    perfis
} = require('../data/db');

module.exports = {
    ola() {
        return 'Hello world !'
    },
    horaAtual() {
        return new Date();
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Ana da Web',
            email: 'fsafha@gmauk,ciom',
            idade: 23,
            salario_real: 1234.56,
            vip: true
        }
    },
    produtoEmDestaque() {
        return {
            nome: 'Conta',
            preco: 2000,
            desconto: 230,
        }
    },
    numerosMegaSena() {
        const crescente = (a, b) => a - b
        return Array(6).fill(0).map(_ => parseInt(Math.random() * 60 + 1)).sort(crescente)
    },
    usuarios() {
        return usuarios;
    },
    usuario(_, {
        id
    }) {
        const user = usuarios.find(e => e.id === id);

        return user ? user : null;
    },
    perfis() {
        return perfis;
    },
    perfil(_, {
        id
    }) {
        const perfil = perfis.find(e => e.id === id);

        return perfil ? perfil : null
    }
}