const button = document.querySelector("button");
const inputNota =document.querySelector("#nota");

//criando uma fução
button.addEventListener("click", function(event))


    event.preventDefault();
    console.log(inputNota.value);

    if (inputNota.value >= 6){
        alert("Voce esta aprovado");
}else{
    alert("Voce esta reprovado");

};