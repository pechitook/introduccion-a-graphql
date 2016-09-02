### GraphQL server tutorial for Node.js with SQL, MongoDB and REST
URL: https://www.youtube.com/watch?v=PHabPhgRUuU

Gran sesión de live coding por Jonas Helfer donde arma un servidor de GraphQL en Node. El código final está en [este repo](https://github.com/apollostack/apollo-server-tutorial). Toca varios temas interesantes:

### Apollo server

Lo más destacado de este setup es que se usa `graphql-tools`, paquete que el equipo de Apollo armó. Permite levantar rápido un servidor GraphQL que por debajo usa `graphql-js`. Además permite usar la _Shorthand notation_ de GraphQL para generar los types y las queries.

La manera de instanciar un servidor con `apolloServer` es la siguiente

```js
graphQLServer.use('/graphql', apolloServer({
  graphiql: true,
  pretty: true,
  schema: Schema,
  resolvers: Resolvers,
  mocks: Mocks,
}));
```

Los valores `graphiql` y `pretty` son opcionales. Apollo Server usa una arquitectura de Schema/Resolvers/[Connectors]. El `schema` es un Schema de GraphQL, y los `resolvers` definen cómo se resuelve cada una de las queries y también cada una de las propiedades de cada tipo (Post, Author, etc).

### Resolvers

Son los que especifican cómo se mapea un type con su respectiva data. En la arquitectura planteada en este tutorial (resolvers/connectors), la idea es que acá se defina cómo se resuelve cada una de las partes declaradas en el Schema (las queries, las mutations y los types)

```js
// así se resuelve una Query
RootQuery: {
  author(_, { firstName, lastName }){
    return Author.find({ where });
  }
}
```

```js
// así se resuelve una mutación
RootMutation: {
  createAuthor: (root, args) => { return Author.create(args); },
  createPost: (root, { authorId, tags, title, text }) => {
    return Author.findOne({ where: { id: authorId } }).then( (author) => {
      return author.createPost( { tags: tags.join(','), title, text });
    });
  },
}
```

```js
// así se definen los types Post y Author, usando funciones de los connectors
import { Author, Post, View } from './connectors';

Author: {
  posts(author){
    return author.getPosts();
  },
},
Post: {
  author(post){
    return post.getAuthor();
  },
  tags(post){
    return post.tags.split(',');
  },
  views(post){
    return new Promise((resolve, reject) => {
      setTimeout( () => reject('MongoDB timeout when fetching field views (timeout is 500ms)'), 500);
      View.findOne({ postId: post.id }).then( (res) => resolve(res.views) );
    })
  }
}
```
