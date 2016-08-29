import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql/type'
import { getPosts, getPostById, createPost } from 'data/posts'

const Post = new GraphQLObjectType({
  name: 'Post',
  fields: {
    id: {
      type: GraphQLInt
    },
    title: {
      type: GraphQLString
    }
  }
})

const PostInput = new GraphQLInputObjectType({
  name: 'PostInput',
  fields: {
    title: {
      type: GraphQLString
    }
  }
})

const Query = new GraphQLObjectType({
  name: 'Queries',
  fields: {
    post: {
      type: Post,
      args: {
        id: {
          description: 'ID del post',
          type: GraphQLInt
        }
      },
      resolve: (root, { id }) => getPostById(id)
    },
    posts: {
      type: new GraphQLList(Post),
      resolve: () => getPosts()
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  fields: {
    createPost: {
      type: Post,
      args: {
        post: { type: PostInput }
      },
      resolve: (value, { post }) => createPost(post)
    }
  }
})

const schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
})

export default schema
