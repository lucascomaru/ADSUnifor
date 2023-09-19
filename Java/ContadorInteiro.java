public class ContadorInteiro {
    public static void main(String[] args) {
        int primeiroDado = 5;
        int N = 20;

        int quantidadeValoresInteiros = contarValoresInteiros(primeiroDado, N);

        System.out.println(
                "Existem " + quantidadeValoresInteiros + " valores inteiros entre " + primeiroDado + " e " + N + ".");
    }

    public static int contarValoresInteiros(int primeiroDado, int N) {
        int contador = 0;

        for (int i = primeiroDado; i <= N; i++) {
            contador++;
        }

        return contador;
    }
}
