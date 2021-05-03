import { gql, makeExecutableSchema } from 'apollo-server-express'
import resolvers from '../resolvers'

export const typeDefs = gql`
  interface People {
    _id: ID
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
  }

  type User implements People {
    _id: ID
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
    friends: [People]!
    greeting: String
  }

  type Query {
    list(search: String): [User]!
    find(_id: ID!): User
  }
`

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
