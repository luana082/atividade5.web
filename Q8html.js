!DOCTYPE html>
<html>
<head>
    <title>tudo bom veyr</title>
</head>
<body>
    <script src="Js/scripts.js"></script>
</body>
</html>


let tempC = parseFloat(prompt('Digite a sua temperatura em °C: '));
let conversao = (tempC * 9/5) + 32;
let tempF = conversao;
alert('A sua temperatura de ' + tempC + '°C' + ' para Fahrenheit é de: ' + tempF + 'F');
