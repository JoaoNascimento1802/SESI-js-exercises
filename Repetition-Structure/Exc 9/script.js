function fibonacci() {
    let a = 0, b = 1, temp;
    let resultado = "Fibonacci: " + a + ", " + b;
    let count = 2;
    while (count < 10) {
        temp = a + b;
        resultado += ", " + temp;
        a = b;
        b = temp;
        count++;
    }
    alert(resultado);
}
