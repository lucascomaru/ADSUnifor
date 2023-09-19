public class Somatorio {
    public static void main(String[] args) {
        int[] conjuntoNumeros = { 2, 4, 6, 8, 10 };

        int somatorio = calcularSomatorio(conjuntoNumeros);

        System.out.println("O somatorio dos numeros: " + somatorio);
    }

    public static int calcularSomatorio(int[] numeros) {
        int somatorio = 0;

        for (int numero : numeros) {
            somatorio += numero;
        }

        return somatorio;
    }
}
