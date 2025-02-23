const p = document.getElementById("p1");
const button = document.getElementById("btt1");

button.addEventListener("click", function () {
    let numeros = "";

    
    for (let i = 1; i <= 10; i++) {
        numeros += i + " , "; 
    }

    p.textContent = numeros; 
});
