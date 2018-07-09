export default `
  type User {
    id: ID!
    email: String!
    username: String!
    teams: [Team!]!

  }

  type Query {
    getUser(id: ID!): User!
    allUsers: [User!]!
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!): Boolean!
  }
`;