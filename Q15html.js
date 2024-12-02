
<html>
<head>
    <title>Média de Aluno</title>
</head>
<body>
    <script src="Js/scripts.js"></script>
</body>
</html>
    let idade = parseFloat(prompt('Digite a idade do nadador:'));
    if (idade >= 18) {
        
        alert('Categorias: Adulto');
    } else if (idade >= 14) {
        alert('Categorias: Juvenil');
    } else if (idade >= 9) {
        alert('Categorias: Infantil');
    } else {
        alert('Categorias: Mirim');
    }
