%title: Meetup.JS BA - Introducción a GraphQL
%author: @p4bloch









-> # GraphQL <-

<br>
▸ Query Language
<br>
▸ Capa de abstracción sobre el backend
<br>
▸ API pensada desde el cliente
<br>





-> ## ¿Por qué el servidor tiene que saber qué datos necesita una vista?

---












-> # GraphiQL <-



---




-> # GraphQL vs REST <-

<br>
**GraphQL**                                    **REST**
▸ El cliente define qué recibe             ▸ El servidor define endpoints
<br>
  ✓ Se envía sólo lo necesario               ✗ Suele enviarse información de más
<br>
  ✓ Toda la data viaja en un request         ✗ Múltiples por vista; custom endpoints
<br>
  ✓ _Flexibilidad_

<br>
▸ Schema                                   ▸ Resources
<br>
  ✓ Fuertemente tipado                       ✗ Tipado débil
<br>

▸ Documentado por naturaleza               ▸ Documentación ajena al desarrollo



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
