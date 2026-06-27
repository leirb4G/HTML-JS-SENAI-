function buscarCep() {
    let cepDigitado = document.getElementById("cep").value;
    cepDigitado = cepDigitado.replace(/-/g, "");

    if (cepDigitado === "") {
        alert("Digite um CEP");
        return;
    }


    if (cepDigitado.length !== 8) {
        alert("CEP tem tamanho inválido, digite um CEP com 8 dígitos");
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