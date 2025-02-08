let temp = parseFloat(prompt("Insira a temperatura em Celsius :"))
let fahrenheit;

function converter(temp) {
    if (isNaN(temp)) {
        console.log("Insira um valor valido !")
    }
    else{
        let fahrenheit = (temp*1.8+32)
        console.log(`A temperatura convertida é ${fahrenheit}`)
    }
}
converter(temp);