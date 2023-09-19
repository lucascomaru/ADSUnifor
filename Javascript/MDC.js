function calcularMDC(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

const numero1 = 36;
const numero2 = 48;

const mdc = calcularMDC(numero1, numero2);

console.log(`O MDC de ${numero1} e ${numero2} é: ${mdc}`);
