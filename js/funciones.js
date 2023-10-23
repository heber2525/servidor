const circulos = document.querySelectorAll(".circulo");
const contenedorTiempo = document.querySelector(".tiempo");
let puntuacion = 0;
let contador = null;
function juego(tiempo) {
  puntuacion = 0;
  contenedorTiempo.innerHTML = "";
  for (let i = 0; i < tiempo; i++) {
    let bloque = document.createElement("div");
    bloque.style.width = `calc(${100 / tiempo}%- 10px)`;
    contenedorTiempo.appendChild(bloque);
  }
  contador = setInterval(() => {
    contenedorTiempo.children[0].remove();
    if (contenedorTiempo.children.lenght == 0) {
      clearInterval(contador);
      console.log("he perdido");
    }
  }, 1000);
}
for (let i = 0; i < circulos.length; i++) {
  circulos[i].addEventListener("click", () => {
    circulos[i].classList.add("invisible");
    puntuacion++;
    if (puntuacion === 12) {
      clearInterval(contador);
      console.log("ha ganado");
    }
  });
}
juego(20);
