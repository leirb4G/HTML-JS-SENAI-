function buscarCep() {
    let cepDigitado = document.getElementById("cep").value;

    if (cepDigitado === "") {
        return;
    }
    fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function(dados) {
        if (dados.erro) {
            alert("CEP não encontrado")
            return;
        }
        document.getElementById("rua").value = dados.logradouro;
        document.getElementById("bairro").value = dados.bairro;
        document.getElementById("cidade").value = dados.localidade;
        document.getElementById("uf").value = dados.uf;
    })
}

const campoCep = document.getElementById("cep");
campoCep.addEventListener('focusout', buscarCep);