## [http://graphql.org/docs/api-reference-type-system/#graphqlschema](Schema)
Construir un Schema es análogo a construir los recursos de una API REST. Nuestro schema va a describir qué campos puede responder el server y qué tipos de objetos las respuesta contendrán.
El tipado es muy importante en GraphQL, y el cliente puede asumir tranquilamente que eso será respetado.

*Shorthand notation*  
Es la manera genérica de armar entidades en GraphQL.

```
type Post {
  id: String
  name: String
  author: Author
  tags: [Tag]
}

type Tag {
  id: String
  name: String
}

type Author {
  id: String
  name: String
}

const Query = `
  type Query {
    post(id: String!): Post
    author(id: String!): Author
  }
`

export const StarWarsSchema = new GraphQLSchema({
  query: queryType,
  types: [ humanType, droidType ]
});
```

## Query

Es la manera de dar acceso a nuestros datos. Son análogos a los endpoints de REST.

En este ejemplo, definimos dos queries: una para acceder a un Post por id, y otra para obtener la colección entera.

```
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
```

### Scalar Types


### Type Definitions

### Type Markers

### Input Arguments

### Interfaces

### Unions

### Enums

## Mutations

Para crear un nuevo Post, lo primero que hay que hacer es crear un `GraphQLInputObjectType`, que es la estructura que va a recibir como input la mutación. En el caso de un Post, así quedaría el `PostInput`

```
const PostInput = new GraphQLInputObjectType({
  name: 'PostInput',
  fields: {
    title: {
      type: GraphQLString
    }
  }
})
```

La mutación `createPost` recibe como input el previamente declarado `PostInput` y devuelve el objeto recientemente creado, del tipo `Post`.

```
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
```

Finalmente, la query que hacemos desde el cliente envía como parámetro el nuevo `PostInput`, y pide solamente el id del `Post` creado.

```
mutation {
  createPost(post: {
    title: "Nuevo Post"
  }) {
    id
  }
}
```

## Subscription


### Error Handling
