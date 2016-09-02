## Qué es GraphQL

Creado por el equipo mobile de Facebook en 2012.

Query Language que se para sobre el backend. Es una _API layer_, como REST. NO es un acceso directo a la DB.

- You don’t connect GraphQL directly to your backend or database. It’s an API layer, just like REST.
- GraphQL intentionally doesn’t include built-in filtering, sorting, computations, or joins. You carefully design all of those yourself to fit the needs of the API consumer, just like REST.
- GraphQL can be layered over multiple backends and databases, without the client being aware of where the data is coming from, just like REST.

GraphQL is a well-specified standard designed from the ground up to enable people to easily describe, understand, and retrieve their data with a shared language.

## Por qué GraphQL?

Cuando una vista del cliente necesita un nuevo conjunto de datos, en una arquitectura REST necesitaríamos que el servidor responda en el endpoint correspondiente este nuevo dato. Una pregunta interesante surje de esto:

> Por qué el servidor tiene que saber qué datos necesita una vista?

Pensemos en una arquitectura con múltiples plataformas. Las necesidades de vista de una aplicación web pueden llegar a ser muy distintas a la de una aplicación nativa para teléfonos, lo que probablemente más tarde que temprano nos lleve a tener dos maneras diferentes de acceder a los mismos datos, sólamente porque el servidor necesita saber qué necesita cada vista.

Esto tal vez podría solucionarse con una arquitectura estrictamente orientada a recursos, pero no sin el costo extra de tener que hacer muchos requests (y manejar mucha data innecesaria) para cada vista y complejizar bastante la lógica de obtención de datos del cliente.

**GraphQL** propone algo diferente y que soluciona este problema con la siguiente premisa: El cliente decide qué necesita y lo pide **en un sólo request al servidor**.

---

Nunca más te va a pasar el _se rompió todo porque el servidor ya no me manda ese campo que necesito_. GraphQL **siempre** devuelve lo que esperás, porque se lo estás pidiendo explícitamente.

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

### A investigar

- Por qué las mutations necesitan tener un nombre? Si no tienen, GraphiQL tira este error

```
{
  "errors": [
    {
      "message": "Unknown operation named \"undefined\"."
    }
  ]
}
```

- Cómo crear un Query con múltiples fields de diferentes archivos? Organización, mejores prácticas
- Scalability?
