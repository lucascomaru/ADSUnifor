public class MDC {
    public static void main(String[] args) {
        int a = 36;
        int b = 48;

        int mdc = calcularMDC(a, b);

        System.out.println("O MDC de " + a + " e " + b + " = " + mdc);
    }

    public static int calcularMDC(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}
