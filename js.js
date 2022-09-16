function Dolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5.14;
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
  
    var valorConvertido = ("O resultado em Real é R$ " + valorEmReal.toFixed(2)).replace("." , ",");
    elementoValorConvertido.innerHTML = valorConvertido;
  }

function Real(){
    var valorElemento1 = document.getElementById("valor");
    var valor1 = valorElemento1.value;
    var valorRealNumerico = parseFloat(valor1);
  
    var valorEmDolar = valorRealNumerico / 5.14;
    console.log(valorEmDolar);
  
    var elementoValorConvertido1 = document.getElementById("valorConvertido1");
  
    var valorConvertido1 = "O resultado em Dolar é U$ " + valorEmDolar.toFixed(2);
    elementoValorConvertido1.innerHTML = valorConvertido1;
}


  