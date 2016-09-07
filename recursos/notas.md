## Qué es GraphQL

Creado por el equipo mobile de Facebook en 2012. Como su implementación estaba escriba en Hack (una modificación de PHP), decidieron escribir una especificación y publicarla junto con una implementación de ejemplo en Javascript a mediados de 2015.

- Query Language que se para sobre el backend. Es una _API layer_, como REST. NO es un acceso directo a la DB.

GraphQL es un estándar muy específico, diseñado desde el vamos para permitir fácilmente describir, entender y obtener datos con un lenguaje en común.

- Type System
- Instrospection
- Execution

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

**resolve() puede devolver una Promise**

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

### A investigar

- Cómo crear un Query con múltiples fields de diferentes archivos? Organización, mejores prácticas

Rta: Apollo Stack tiene funciones helpers útiles para esto. [Ver acá](http://dev.apollodata.com/tools/graphql-tools/index.html)

- Scalability?

Caching server side: [DataLoader](https://github.com/facebook/dataloader) [explicado](http://gajus.com/blog/9/using-dataloader-to-batch-requests)

- Qué son el `root` que recibe el resolve de un query y `value` que recibe el de una mutation?
- Fragments. Lo escucho mucho y no entiendo para qué sirven.

Rta: Sirven para reusar el mismo código en distintas queries/mutations.

### Lo que viene, anunciado [acá](https://www.youtube.com/watch?v=ViXL0YQnioU)

- @defer (batch)
- @stream
- @live
