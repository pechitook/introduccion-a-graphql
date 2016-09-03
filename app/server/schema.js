import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql/type'
import { getPosts, getPostById, createPost } from './data/posts'
import { getAuthors, getAuthorById, createAuthor } from './data/authors'

const Author = new GraphQLObjectType({
  name: 'Author',
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    twitterHandle: { type: GraphQLString }
  }
})

const Post = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    author: { type: Author }
  }
})

const Query = new GraphQLObjectType({
  name: 'Queries',
  fields: {
    post: {
      type: Post,
      args: {
        id: { description: 'ID del post', type: GraphQLInt }
      },
      resolve: (root, { id }) => getPostById(id)
    },
    posts: {
      type: new GraphQLList(Post),
      resolve: () => getPosts()
    },
    author: {
      type: Author,
      args: {
        id: { description: 'ID del Autor', type: GraphQLInt }
      },
      resolve: (root, { id }) => getAuthorById(id)
    },
    authors: {
      type: new GraphQLList(Author),
      resolve: () => getAuthors()
    }
  }
})

const PostInput = new GraphQLInputObjectType({
  name: 'PostInput',
  fields: {
    title: { type: GraphQLString }
  }
})

const AuthorInput = new GraphQLInputObjectType({
  name: 'AuthorInput',
  fields: {
    name: { type: GraphQLString },
    twitterHandle: { type: GraphQLString }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createPost: {
      type: Post,
      args: { post: { type: PostInput } },
      resolve: (value, { post }) => createPost(post)
    },
    createAuthor: {
      type: Author,
      args: { author: { type: AuthorInput } },
      resolve: (value, { author }) => createAuthor(author)
    }
  }
})

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})

export default schema
