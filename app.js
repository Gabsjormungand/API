function Converter(valorBR){
    fetch("https://economia.awesomeapi.com.br/json/last/usd")
        .then((response) => response.json())
        .then((data) => alert( valorBR * data.USDBRL.high))
        .catch((error) => console.log(error))
}

document.getElementById("calcular").addEventListener("click", ()=>{
    let valorBR = document.getElementById("valorBR").value
    Converter(valorBR)
})