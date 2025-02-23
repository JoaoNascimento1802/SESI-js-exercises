function numerosPrimos() {
    let primos = [];
    for (let num = 2; num <= 20; num++) {
        let ehPrimo = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) {
            primos.push(num);
        }
    }
    alert("Números primos de 1 a 20: " + primos.join(", "));
}
