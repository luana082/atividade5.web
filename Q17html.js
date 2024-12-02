<html>
<head>
    <title>Média do Aluno</title>
</head>
<body>
    <script src="Js/scripts.js"></script>
</body>
</html>
‎scripts.js
+13
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,13 @@
 let valorCompra = parseFloat(prompt('Digite o valor de compra do produto:'));
    let valorVenda;
    if (valorCompra < 20) {
        valorVenda = (valorCompra * 0.45) + valorCompra; 
    } else {
        valorVenda = (valorCompra * 0.30) + valorCompra;
    }
    alert("Sua compra ficou no valor de: "+ valorVenda)
