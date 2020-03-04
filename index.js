
const {ApolloServer, gql} = require('apollo-server')



const typeDefs = gql`
    type Query {
        saudacao: String!
        hora: String!
    }

`
const resolvers = {
    Query: {
        saudacao() {
            return 'boa noitttte!!!'
        },
        hora(){
            return `${new Date()}`
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers

})

server.listen().then(({ url }) => {
    console.log(`server executando em ${url}`)
})