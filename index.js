const {
    ApolloServer,
    gql
} = require('apollo-server')

const usuarios = [{
        id: 1,
        nome: 'Ana da Web',
        email: 'fsafha@gmauk,ciom',
        idade: 23,

    }, {
        id: 2,
        nome: 'Rafa',
        email: 'dad@gmauadak,ciaom',
        idade: 25,

    },
    {
        id: 3,
        nome: 'Web',
        email: 'sdf@gmaukaa,cioam',
        idade: 26,

    }
]

const typeDefs = gql `
    #scalar perso
    scalar Date

    type Usuario {
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    # Pontos de entrada da sua API!
    type Query {
        ola: String
        horaAtual: Date
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
        numerosMegaSena: [Int!]!
        usuarios: [Usuario]
    }
`

const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real;
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
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({
    url
}) => {
    console.log(`Executando em ${url}`)
})