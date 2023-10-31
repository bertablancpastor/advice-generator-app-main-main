# Advice Generator

Vamos a implementar este reto de Front End Mentor.
Cada vez que hacemos clic en el dado, obtenemos un _consejo_ de forma aleatoria

[Demo](https://neenreva.github.io/advice-generator-app-main/)

## Web sobre la API

Vamos a obtener los _consejos_ de una API que se encuentra en [esta Web](https://api.adviceslip.com/)

## Qué tenemos que hacer

1. Al hacer clic en el dado, se debe hacer una petición GET mediante la funcion _fetch_ a la URL adecuada
2. Obtenemos un consejo nuevo
3. Tenemos que actualizar el #ID del consejo y el texto del consejo, en el nodo DOM adecuado.

## Preguntas de auto evaluación

1. Describe con exactitud el tipo de datos que podemos obtener de la respuesta de la API (es un array? es un objeto? que propiedades tiene? etc)
   Los datos que obtenemos al obtener la respuesta de una API es un objecto anomenado slip, que tiene dos propiedades: advice i id
