public class Ordenado {
    public static void main(String[] args) {
        int[] array = { 5, 3, 1, 4, 2 };

        quicksort(array, 0, array.length - 1);

        System.out.println("Array Ordenado:");
        for (int elemento : array) {
            System.out.print(elemento + " ");
        }
    }

    public static void quicksort(int[] array, int inicio, int fim) {
        if (inicio < fim) {
            int indicePivo = particionar(array, inicio, fim);
            quicksort(array, inicio, indicePivo - 1);
            quicksort(array, indicePivo + 1, fim);
        }
    }

    public static int particionar(int[] array, int inicio, int fim) {
        int pivo = array[fim];
        int i = inicio - 1;

        for (int j = inicio; j < fim; j++) {
            if (array[j] < pivo) {
                i++;
                int temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        int temp = array[i + 1];
        array[i + 1] = array[fim];
        array[fim] = temp;

        return i + 1;
    }
}
