const button = document.getElementById("button1")
const p = document.getElementById("p1")



button.addEventListener("click", function() {
    let numeros = " ";

    for(let i = 1; i<=20; i++){
        if(i %2 == 0){
            numeros += i + " , "; 
        }
    }

    p.textContent = numeros; 
});