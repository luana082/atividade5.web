código html:

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

código js:

let reais = parseFloat(prompt("Digite o valor de reais para transformar em dolar: "))
let dolar = 6;
let conversao = (reais * dolar);
alert(conversao);
