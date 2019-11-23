const {
    ApolloServer,
    gql
} = require('apollo-server')

const {
    importSchema
} = require('graphql-import')

const usuarios = [{
        id: 1,
        nome: 'Ana da Web',
        email: 'fsafha@gmauk,ciom',
        idade: 23,
        perfil_id: 1

    }, {
        id: 2,
        nome: 'Rafa',
        email: 'dad@gmauadak,ciaom',
        idade: 25,
        perfil_id: 2
    },
    {
        id: 3,
        nome: 'Web',
        email: 'sdf@gmaukaa,cioam',
        idade: 26,
        perfil_id: 1
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



const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real;
        },
        perfil(usuario) {
            const perfil = perfis.find(e => e.id === usuario.perfil_id);

            return perfil ? perfil : null
        }
    },
    Produto: {
        precoComDesconto(produto) {
            if (produto.desconto) {
                return produto.preco - produto.desconto;
            } else
                return produto.preco;
        }
    },
    Query: {
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
}

const server = new ApolloServer({
    typeDefs: importSchema('./schema/index.graphql'),
    resolvers
})

server.listen().then(({
    url
}) => {
    console.log(`Executando em ${url}`)
})