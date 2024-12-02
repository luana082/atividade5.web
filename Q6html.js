<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>De dollar para real</title>
</head>
<body>
    <script src="./Js/script.js"></script>
</body>
</html>


let tempF = parseFloat(prompt('Digite a sua temperatura em F: '));
let conversao = (tempF - 32) * 5 / 9;
let tempCelsius = conversao;
alert('A sua temperatura de ' + tempF + 'F' + ' para celsius é de: ' + tempCelsius + '°C');
