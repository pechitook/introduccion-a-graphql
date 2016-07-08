### Zero to GraphQL in 30 Minutes – Steven Luscher
URL: https://www.youtube.com/watch?v=UBGzsb2UkeY
GH: https://github.com/steveluscher/zero-to-graphql

#### Notas:
Promesa de la charla: No se necesita mucho código para adaptar una API existente a GraphQL.

GraphiQL (🗣 Graphical), es una tool para hacer queries en Graphql.

En REST puro tendríamos un recurso para cada modelo de nuestra aplicacion, y la respuesta de recursos nesteados tendría un enlace a los modelos que correspondan. Una técnica bastante usada en REST es enviar parámetros como `?include=child` para pedir el recurso nesteado que necesitamos mostrar en la vista. Es fácil que todo escale muy pronto por una escalera de caca llena de custom endpoints y parámetros opcionales.

En GraphQL tenemos la capacidad de pedirle a la vista, a través de una query específica, sólo lo que necesitamos (evitando un overhead de un endpoint genérico), en un sólo round-trip al servidor.

El método resolve en GraphQL en node, que es donde decimos de dónde saca la data, acepta una promise que se resuelva a la data que queremos devolver. Esto es _super poderoso_, porque nos permite potencialmente conectar cualquier tipo de datastore a nuestro GQL server de node.

##### Conclusión:
Excelente charla, el pibe agarra dos servicios existentes en Django y en Rails y los adapta para que funcionen con GQL. Al final usa node como ejemplo, y al no tener una capa de datos (arranca con una app vacía), lo que hace es conectarse a la API de Django. Muy Groso.