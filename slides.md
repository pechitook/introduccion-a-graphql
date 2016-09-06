%title: Meetup.JS BA - Introducción a GraphQL
%author: @p4bloch









-> # GraphQL <-

<br>
▸ Query Language - [Spec](https://facebook.github.io/graphql/)
<br>
▸ Capa de abstracción sobre el backend
<br>
▸ API pensada desde el cliente
<br>





-> ## ¿Por qué el servidor tiene que saber qué datos necesita una vista?

---












-> # GraphiQL - DEMO <-



---




-> # GraphQL vs REST <-

<br>
**GraphQL**                                    **REST**
▸ El cliente define qué recibe             ▸ El servidor define endpoints
<br>
  ✓ Se envía sólo lo necesario               ✗ Suele enviarse información de más
<br>
  ✓ *1* request por vista                      ✗ Múltiples por vista; custom endpoints
<br>
  ✓ Fácil mantenimiento de versiones         ✗ Versionado implica múltiples codebases
<br>
  ✓ _Flexibilidad en el cliente_

<br>
▸ Documentado por naturaleza               ▸ Documentación ajena al desarrollo

<br>
▸ Validación antes de ejecución


---

\                                _*VAMO A CODEAR*_

-> \             \\\.\:\7\:\:\+\I\.                    
-> \           \Z\=\=\=\=\=\=\=\=\=\~\7                  
-> \         \.\I\=\=\=\=\=\=\Z\:\M\:\=\=\=                 
-> \         \.\$\=\=\=\=\=\=\:\.\N\O\=\=\?\?                
-> \         \D\I\=\=\=\=\=\=\M\D\D\8\=\=\I\I                
-> \       \.\:\=\~\=\=\=\=\=\=\D\Z\Z \=\~\I\I                
-> \       \.\,\=\~\:\I\7\I\=\:\~\=\=\=\=\I\I\I\.               
-> \         \.\~\=\=\=\=\=\=\=\=\=\~\I\I\I\=\.               
-> \         \.\.\Z\I\I\I\?\I\I\I\I\I\I\I\.\.\N               
-> \       \.\=\:\=\I\?\=\Z\7\7\7\$\$\O\I\I\?\=\Z\Z\.             
-> \     \.\~\=\+\I\I\~\~\:\+\+\?\+\+\:\=\=\=\?\I\Z\8\8             
-> \   \$\=\=\I\I\I\I\I\~\~\?\~\~\~\~\~\~\=\=\=\=\I\I\$\Z\$\.            
-> \ \.\?\I\$\I\I\I\Z\~\~\~\~\I\~\~\~\=\~\~\=\I\I\I\.\Z\7\$            
-> \ \.\=\7\$\I\?\=\?\~\~\~\~\+\~\~\$\~\I\I\I\I\I\.\.\Z\$\Z            
-> \         \~\~\~\~\~\:\~\~\7\I\I\I\I\Z\?\,\8\Z\7\Z            
-> \         \:\~\~\~\7\?\~\:\~\~\:\?\+\+\I\,\O\Z\$\7  \.\I\:\~\~\$\.   
-> \         \I\~\~\~\~\:\~\~\~\~\+\Z\+\+\=\,\,\$\Z\. \+\=\=\=\=\=\=\=\.  
-> \        \=\=\7\~\~\~\+\~\~\?\+\+\O\~\=\=\I\7\Z\D\.\=\=\=\=\=\=\=\=\=\=  
-> \       \~\=\=\I\O\+\+\I\?\+\+\?\=\=\=\=\=\=\I\Z\$\=\=\=\=\?\=\=\=\=\I\I  
-> \      \.\=\=\I\I\I\I\+\+\+\+\$\=\=\=\=\=\=\=\I\?\=\=\=\=\+\7\I\I\I\I\I\$  
-> \      \.\I\I\I\I\I\I \.\.\~\7\7\Z\=\=\=\=\?\I\?\I\I\I\I\I\I\?\I\I\I\=\.  
-> \     \~\7\I\I\I\I\?\I     \.\.\I\~\=\+\I\I\?\.\.\.\:\$\$\Z\=\.\.    
-> \     \.\.\.\.\.\. \.       \Z\I\I\I\I\I\I\.             
-> \                     \I\.\7\?\.\~\.             

---




# Schema

▸ schema          *Definición del Schema*
▸ query           *Operación de sólo lectura*
▸ mutation        *Operación de escritura seguido de un fetch*
▸ subscription    *Suscribirse a cambios (experimental)*

---




# Types

▸ Objects                      *Objetos de dominio: Post, Author*
▸ Input                        *Igual que los Objetos pero para los parámetros*
▸ Scalars (Int, String)
▸ Interface
▸ Enum
▸ Union                        *Define una lista de tipos posibles*

---




# Type Markers

▸ String          *String nulleable*
▸ String!         *String _no_ nulleable*
▸ [String]        *Lista de Strings nulleables*
▸ [String]!       *Lista _no_ nulleable de Strings _nulleables_*
▸ [String!]!      *Lista _no_ nulleable de Strings _no nulleables_*

---




# Librerías disponibles

▸ Javascript
▸ Ruby
▸ PHP
▸ Python
▸ Java
▸ C++
▸ Go
▸ Scala
▸ .Net
▸ Elixir
▸ Haskell
▸ Lua
▸ PostgreSQL

---




# Clientes disponibles en JS

<br>
▸ Relay           *Oficial de FB. Sólo React. API compleja.*

<br>
▸ Adrenaline      *Alternativa a Relay, API más simple.*

<br>
▸ Apollo          *Enfocado en React pero usable en otros fw*


---




# Bonus track: Apollo Server

<br>
▸ Nos permite usar la _Shorthand Notation_

<br>
▸ Mocking

<br>
▸ Mejor estructura

---




# GraphQL as a service

▸ Reindex.io      
▸ Graph.cool

---




# Recursos

<br>
▸ github.com/p4bloch/introduccion-a-graphql

<br>
▸ Slack GraphQL & Apollo

<br>
▸ React Conf Youtube

<br>
▸ Apollo Stack en Youtube
▸ medium.com/apollo-stack
