<html>
<head>
    <title>Média do Aluno</title>
</head>
<body>
    <script src="Js/scripts.js"></script>
</body>
</html>

    let numero1 = parseFloat(prompt('Digite o primeiro numero:'));
    let numero2 = parseFloat(prompt('Digite o segundo numero:'));
    let numero3 = parseFloat(prompt('Digite o terceiro numero:'));
    
    if (numero1 >= numero2 && numero1 >= numero3) {
        alert('O maior numero e: ' + numero1);
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        alert('O maior numero e: ' + numero2);
    } else {
        alert('O maior numero e: ' + numero3);
  
