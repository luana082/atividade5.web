<html>
<head>
    <title>Média de Alunos</title>
</head>
<body>
    <h1>Programa de Verificar  Notas  dos Alunos</h1>
    <form>
        <p>
            Nome de Alunos:
            <input type="text" id="nomedoAluno" required>
        </p>
    
    <p>
        1° Nota
        <input type="number" min="0" max="10" id="nota1" required>
    </p>
    <p>
        2° Nota
        <input type="number" min="0" max="10" id="nota2" required>
    </p>
    <p>
        3° Nota
        <input type="number" min="0" max="10" id="nota3" required>
    </p>
    <input type="submit" value="Exibir Média e Situação">
</form>
    <h3></h3>
    <h4></h4>
    <script src="Js/scripts.js"></script>
</body>
</html>

const formulario = document.querySelector("form")
const respMedia = document.querySelector("h3")
const respSituacao = document.querySelector("h4")
formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = formulario.nomedoAluno.value
    const nota1 = Number(formulario.nota1.value)
    const nota2 = Number(formulario.nota2.value)
    const nota3 = Number(formulario.nota3.value)
    const media = (nota1 + nota2 + nota3) / 3
    if (media >= 7){
        respSituacao.innerText = `Aluno Aprovado! `
    respSituacao.style.color = "green"
}else {
    respSituacao.innerText = `Aluno Reprovado ): `
respSituacao.style.color = "red"
}
respMedia.innerText = `Media das Notas ${media}`
})
