<!DOCTYPE html>
<html>
<head>
    <title>de boas veyr</title>
</head>
<body>
    <script src="Js/scripts.js"></script>
</body>
</html>

let numero = parseFloat(prompt('Digite um número: '));
if (numero < 0) {
    
    alert("Você digitou um número negativo");
} else if(numero > 0){
    alert("Você digitou um número positivo");
} else {
    
    alert("Você digitou zero");
}
