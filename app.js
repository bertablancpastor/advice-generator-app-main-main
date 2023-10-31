// ¡Buena suerte!

const text = document.querySelector("#advice-text");
const button = document.querySelector("#button");
const id = document.querySelector("#advice-id");

button.addEventListener("click", function () {
  getRandomAdvice();
});

async function getRandomAdvice() {
  // await -> usado para gestionar funciones que se ejecutan de forma asíncrona, es decir, que van a tardar un ratito más o menos largo, en ejecutarse.
  // Fetch es hacer una petición GET a la URL que pongo como parámetro
  const response = await fetch("https://api.adviceslip.com/advice");
  console.log("Response", response);

  // 2. Va a procesar la respuesta, para convertirla en un tipo de datos que sea capaz mi programa de entenderlo (objeto, array de objetos) 99% veces
  // Le decimos a JavaScript que esa respuesta contiene un string en formato JSON. Queremos que lo convierta de string a objeto (o array de objetos)
  const data = await response.json();
  console.log(data);

  text.innerHTML = data.slip.advice;
  //   console.log(data.slip.advice);
  id.innerHTML = data.slip.id;
}
