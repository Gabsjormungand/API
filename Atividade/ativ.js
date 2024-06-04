function Converter(valorCEP){
    fetch("https://cep.awesomeapi.com.br/json/")
        .then((response) => response.json())
        .then((data) => alert(valorCEP + data + "11"))
        .catch((error) => console.log(error))
}

document.getElementById("endereco").addEventListener("click", ()=>{
    let valorBR = document.getElementById("valorCEP").value
    Converter(valorCEP)
})