function imprimirNome() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let departamento = document.getElementById("departamento").value;
    let temAcessoRestrito = document.getElementById("temAcessoRestrito").checked; // Retorna true ou false

    if (nome == "sim"){
        nome = true
    }

    console.log("====== DADOS DO CRACHÁ VIRTUAL ======");
    console.log("Nome (String):", nome);
    console.log("Idade (Number):", idade);
    console.log("Departamento (String):", departamento);
    console.log("Acesso Restrito (Boolean):", temAcessoRestrito);
    console.log("=====================================");

    window.alert(
        "Cadastro finalizado com sucesso!\n\n" +
        "DADOS DO CRACHÁ:\n" +
        "Nome: " + nome + "\n" +
        "Idade: " + idade + "\n" +
        "Departamento: " + departamento + "\n" +
        "Acesso Restrito: " + temAcessoRestrito
    );

    if (temAcessoRestrito) { /// se (verdadeiro)
        window.location.href = "pages/gerente.html"
    } else {
        window.location.href = "pages/funcionario.html"
    }
}