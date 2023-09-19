function fibonacci(n) {
  let sequencia = [0, 1];

  for (let i = 2; i < n; i++) {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
  }

  return sequencia.slice(0, n);
}

const n = 10;

console.log(
  `Os primeiros ${n} termos da sequência de Fibonacci são: ${fibonacci(n)}`
);
