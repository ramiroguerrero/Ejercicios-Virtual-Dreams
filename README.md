 # Ejercicios-Virtual-Dreams

 ## Ejercicio 2

#### 1. ¿Qué es un servidor HTTP?
Un servidor HTTP es un programa que intermedia entre los usuarios que realizan solicitudes y los servidores con los datos que envian una respuesta. Esta comunicacion se realiza a través del protocolo HTTP.
#### 2.	¿Qué son los verbos HTTP? Mencionar los más conocidos
Los verbos HTTP indican la accion que el cliente solicita cuando se comunica con el servidor. Dentro de los mas conocidos se encuentran: 
GET * El metodo GET se utiliza para recuperar informacion desde el servidor. 
POST * El metodo POST se utiliza para enviar informacion al servidor. 
PUT * El metodo PUT se utiliza para reemplazar toda la informacion actual de un recurso por la informacion solicitada en la petición. 
DELETE * El metodo DELETE se utiliza para borrar un recurso previamente solicitado.
#### 3.	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers? 
Request es el pedido por parte del cliente en una comunicacion HTTP y response es la respuesta por parte del servidor web. Los headers son los parámetros que se envian en una request o response HTTP tanto al cliente como al servidor para proporcionar informacion adicional sobre la solicitud en curso.
#### 4.	¿Qué es un queryString? (En el contexto de una url)
Una queryString dentro de una URL es una cadena de caracteres que se utiliza para especificar valores de parametros al momento de realizar una solicitud de informacion. El servidor devolverá la informacion especificada en la queryString.
#### 5.	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?
El responseCode es un codigo de 3 digitos que donde el primero digito define que tipo de respuesta estamos obteniendo, hay 5 valores para el primer digito: 1XX(informativo); 2XX (Exito); 3XX(Redireccionamiento); 4XX(Error de cliente); 5XX(Error de servidor). Para cada uno de estos los siguientes dos digitos definen que codigo puntual se nos esta respondiendo.
#### 6.	¿Cómo se envía data en un Get y cómo en un POST? 
En un GET la infomación se envía a través de la URL. Esto ocasiona que la visibilidad de la información sea alta y que al ser parte de la URL la información quede almacenada en el historial de búsqueda. Además la información que se envía es limitada debido a que el largo de la URL también lo es.
En un POST, en cambio, la información que se envía no es visible en la URL y también es ilimitada en cuanto a cantidad se refiere. Además al no ser parte de la URL no queda guardada en el historial.
#### 7.	¿Qué verbo http utiliza el navegador cuando accedemos a una página?
El verbo HTTP que utiliza el navegador al acceder a una página web es el GET ya que el concepto de éste es obtener la información almacenada en el servidor.
#### 8.	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.
Las estructuras de datos JSON (JavaScript Object Notation) y XML (Extensible Markup Language) son formatos de texto utilizados para el intercambio de información de manera estructurada. Ejemplos:

XML:
```
<persona>
   <nombre>Ramiro</nombre>
   <apellido>Guerrero</apellido>
   <edad>21</edad>
   <fechaNacimiento>
   	<dia>3</dia>
   	<mes>8</mes>
   	<anio>1999</anio>
   </fechaNacimiento>
</usuario>
  ```
JSON:
```
{
   "Persona": {
      "Nombre": "Ramiro",
      "Apellido": "Guerrero",
      "Edad": "21",
      "Fecha de nacimiento": {
        "Dia": 3,
        "Mes": 8,
        "Anio": 1999
        }
     }
}
 ```               
#### 9. Explicar brevemente el estándar SOAP
SOAP es un protocolo que define de que manera pueden comunicarse dos objetos mediante el intercambio de datos XML.
#### 10. Explicar brevemente el estándar REST Full
REST (REpresentational State Transfer) es un estilo de arquitectura de software que facilita el intercambio y manejo de datos a traves de servicios web. Para esta manipulacion de datos utiliza HTTP. Todo servicio web que siga el estilo de arquitectura REST es llamado RESTful web service.
#### 11. ¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?
Los headers otorgan informacion adicional junto a la consulta realizada como por ejemplo información acerca del navegador del cliente, de la página solicitada, del servidor, etc. El Content-type en el header se utiliza para indicar el tipo de dato que se esta enviando. El Content-type por ejemplo podria tener informacion de la codificacion de los caracteres.

 ## Ejercicio 3
  1.Get![](https://raw.githubusercontent.com/ramiroguerrero/Ejercicios-Virtual-Dreams/main/1.png)
  2.Post![](https://raw.githubusercontent.com/ramiroguerrero/Ejercicios-Virtual-Dreams/main/2.png)
  3.Get![](https://raw.githubusercontent.com/ramiroguerrero/Ejercicios-Virtual-Dreams/main/3.png)

La diferencia es que dado que en el item anterior se hizo un POST con nuestros datos al realizar nuevamente un GET a la misma url se observa como se obtuvieron los datos previamente insertados.


## Como Ejecutar
1.Abrimos el simbolo del sistema
2.En este nos posicionamo en la ruta donde este la carpeta 'scripts'
3.Una vez dentro del directerio escribimos: 'node servidor.js'.     
4.La consola debe respondernos "escuchando puerto 3000"
5.Ahora nos dirigimos al navegador y escribimos 'localhost:3000' .
6.Ahora completamos el formulario y enviamos.
7.Si quisieramos verificar si nuestros datos fueron correctamente cargados pordemos hacerlo con postman (realizando un GET a la url) o bien con la url misma.

