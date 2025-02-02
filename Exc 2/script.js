let nota1 = parseFloat(prompt("Insira a primeira nota (0 a 10):"));
let nota2 = parseFloat(prompt("Insira a segunda nota (0 a 10):"));
let nota3 = parseFloat(prompt("Insira a terceira nota (0 a 10):"));


if ( isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10) {
    console.log("Insira valores entre 0 e 10.");
} else if (nota1 === 0 || nota2 === 0 || nota3 === 0) {
    console.log("Desqualificado");
} else {
  
    const resul1 = ((nota1 * 1) + (nota2 * 2) + (nota3 * 3)) / 6;

  
    if (resul1 >= 9) {
        console.log("Sua média é excelente!");
    } else if (resul1 >= 7) {
        console.log("Sua média é boa!");
    } else if (resul1 >= 5) {
        console.log("Sua média é regular!");
    } else {
        console.log("Sua média é ruim!");
    }
}
