<html>
<head>
    <title>Média do Aluno</title>
</head>
<body>
    <script src="Js/scripts.js"></script>
</body>
</html>
‎scripts.js
+17
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,17 @@
    let numero1 = parseFloat(prompt('Digite o primeiro numero:'));
    let numero2 = parseFloat(prompt('Digite o segundo numero:'));
    let soma = numero1 + numero2;
    if (soma > 20) {
        soma += 8; 
    } else {
        soma -= 5; 
        
    }
    alert("O resultado final é: " + soma);
