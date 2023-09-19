function contarValoresInteiros(primeiroDado, N) {
  let contador = 0;

  for (let i = primeiroDado; i <= N; i++) {
    contador++;
  }

  return contador;
}

const primeiroDado = 5;
const N = 20;

const quantidadeValoresInteiros = contarValoresInteiros(primeiroDado, N);

console.log(
  `Existem ${quantidadeValoresInteiros} valores inteiros entre ${primeiroDado} e ${N}.`
);
