const types = `
type Author {
  id: Int!
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  id: Int!
  tags: [String]
  title: String
  text: String
  author: Author
}

type Query {
  author(id: Int): Author
  fortuneCookie: String
}

type Mutation {
  createAuthor(
    firstName: String!
    lastName: String!
  ): Author

  createPost(
    tags: [String!]!
    title: String!
    text: String!
    authorId: Int!
  ): Post
}

schema {
  query: Query
  mutation: Mutation
}
`;

export default [types];
