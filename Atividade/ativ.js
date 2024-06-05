function Converter(valorCEP){
    fetch("https://cep.awesomeapi.com.br/json/" + valorCEP)
        .then((response) => response.json())
        .then((data) => alert(data.address + ", " + data.district + ", " + data.city + ", " + data.state))
        .catch((error) => console.log(error))
}

document.getElementById("endereco").addEventListener("click", ()=>{
    let valorCEP = document.getElementById("valorCEP").value
    Converter(valorCEP)
})