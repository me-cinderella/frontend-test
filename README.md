# Levantar y ejecutar

Para levantar el proyecto se debe tener instalado en el equipo `Docker` y `Docker compose`

instalar docker: https://docs.docker.com/engine/install/ubuntu/
instalar docker-compose: https://docs.docker.com/compose/install/

En la raiz del proyecto (dentro del directorio frontend-test) se debe ejecutar el comando
`docker-compose up` y esperar que se construya la imagen y posteriormente se levante el servidor web con la aplicacion

Dicha aplicacion sera levantada de manera local quedando ubicada en la url indicada por el mismo contenedor una vez lista para su uso

Puede quedar en: 
    * http://localhost:3000/
    * http://172.17.0.2:3000/

Dentro de la aplicacion existe un menu que permite navegar a las soluciones de los problemas presentados para este test siendo

    - home:
        - url: "http://localhost:3000/"
        - Lista de personajes de marvel con "cargar mas" al llegar al final de la vista
            NOTA: en caso de no cargar automaticamente acercar el cursor al final de la pagina.
    - ejercicio-1:
        - url: "http://localhost:3000/ejercicio-1"
        - Formulario para calculo de numeros primos segun rango dado
    - ejercicio-2:
        - url: "http://localhost:3000/ejercicio-2"
        - Vista con 2 columnas, una para los datos ingresados y otra para la salida esperada (a la derecha)

# Frontend Test

Bienvenid@ a la prueba técnica que hemos diseñado para quienes postulan al cargo de frontend developer en Envíame.
La prueba está diseñada para ser resuelta en tres jornadas laborales (2 días).

En caso de que tengas alguna pregunta puedes escribirnos a: *tech-test@enviame.io*

Te deseamos mucho éxito!

#### Ejercicio 1  (**2pts**)

Crear un script (javascript/nodejs) que reciba un rango entre A y B y a partir de este rango se muestren en pantalla los números primos.

__En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1.__

Ej: Para el rango entre 1 y 10, los números primos serán 2,3,5 y 7.

El entregable puede ser un script que se pueda ejecutar por terminal o una web simple sin diseño. 

#### Ejercicio 2  (**3pts**)

Dado los siguientes json:
​
```javascript
   // JSON 
   let values =  {
        1: {
            carrier: "CCH",
            service: "DEX",
        },
        17: {
            carrier: "CHP",
            service: "express",
        }
   }
  // JSON
   let json = { 
                data: {
                    BUIN: {
                        limit: 1,
                        over_carrier_service_id: 17,
                        under_carrier_service_id: 17
                    },
                    LAJA: {
                        limit: 1,
                        over_carrier_service_id: 1,
                        under_carrier_service_id: 1
                    },
                    LEBU: {
                        limit: 1,
                        over_carrier_service_id: 1,
                        under_carrier_service_id: 1
                    },
                    LOTA: {
                        limit: 1,
                        over_carrier_service_id: 17,
                        under_carrier_service_id: 17
                    }
                }
            }
```

Se debe generar un script que con estas entradas genere el siguiente resultado:

```javascript
   let result = {
        BUIN: {
            limit: 1,
            over: {
                carrier: "CHP",
                service: "express",
            },
            under: {
                carrier: "CHP",
                service: "express",
            }
        },
        LAJA: {
            limit: 1,
            over: {
                carrier: "CCH",
                service: "DEX",
            },
            under: {
                 carrier: "CCH",
                service: "DEX",
            }
        },
        LEBU: {
            limit: 1,
            over: {
                carrier: "CCH",
                service: "DEX",
            },
            under: {
                 carrier: "CCH",
                service: "DEX",
            }
        },
        LOTA: {
            limit: 1,
            over: {
                carrier: "CHP",
                service: "express",
            },
            under: {
                carrier: "CHP",
                service: "express",
            }
        }
   } 
```

El script debe estar escrito en javascript (puedes usar librerías/frameworks que te ayuden con la manipulación de los json), el entregable puede ser un script por terminal o una web simple.

#### Ejercicio 3   (**5pts**)

El siguiente desafío pondrá a prueba tus habilidades como frontend, el desafío consta de construir una interfaz web responsive de los super héroes de Marvel.
<br> _En la evaluación consideraremos usabilidad y consistencia en el diseño._

##### API

Para poder utilizar la API debes ingresar a https://developer.marvel.com/ sección **Get a key** completar el formulario de registro y del menú API-KEY. Luego de obtener la **public y private key** revisa la forma de autenticar en el siguiente [link](https://developer.marvel.com/documentation/authorization) para poder acceder a los recursos y al endpoint de personajes.

##### Requerimientos

1 - Construir una interfaz web en la cual se listen los super héroes de Marvel entregados por la API `https://gateway.marvel.com/v1/public/characters`, cada elemento de la lista debe entregar la siguiente información (**2pts**)
    - Name
    - Description
    - Thumbnail
    - Modified (Fecha en formato 'DD-MM-YYYY')

2 - El listado debe tener infinite scroll que vaya cargando más super héroes al listado. (**2pts**) 

3 - Añadir un buscador en la interfaz que permita buscar un super héroe por su nombre. (**1pts**)

#### Requerimientos técnicos

La interfaz web debe estar construida con el framework y/o librerías a elección (ReacJS, Vue, Angular, CSS Bootstrap, Less/SASS, etc.)


