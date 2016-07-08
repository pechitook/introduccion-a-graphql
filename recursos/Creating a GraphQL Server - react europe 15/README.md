### Nick Schrock & Dan Schafer - Creating a GraphQL Server
URL: https://www.youtube.com/watch?v=gY48GW87Feo

#### Notas:
##### Custom endpoints vs GraphQL.
Cantidad de endpoints relacionada a la cantidad de features. Una iteración de una feature o un nuevo feature potencialmente debería acompañarse con un endpoint nuevo.
En versiones mobile, incluso tendriamos que mantener todos los endpoints de todas las versiones, dado que un usuario puede tener una versión desactualizada de la app.

En GraphQL, cuando necesitás recibir data diferente para un endpoint, lo que hacés es simplemente cambiar tu query y agregar en el Schema correspondiente cómo se obtiene ese dato (que probablemente ya estaba porque se usa en otro lado de tu aplicación).