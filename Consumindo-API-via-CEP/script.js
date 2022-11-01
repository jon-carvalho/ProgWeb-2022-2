function consultaEndereco() {
    cep = document.querySelector('#cep').value;

    if(cep.length !== 8) {
        alert('Cep inválido!');
        return;
    }

    url = `https://viacep.com.br/ws/${cep}/json`

    fetch(url).then(function(response){
        console.log(response)
        response.json().then(function(data){
            console.log(data)
            mostrarEndereco(data)
        })
    })
}

function mostrarEndereco(dados) {
    let resultado = document.querySelector('#resultado');

    if(dados.erro) {
        resultado.innerHTML = "Não foi possível localizar endereço"
    } else {
    resultado.innerHTML = `<p class="atributos">Endereço:</p> <p>${dados.logradouro}</p>
    <p class="atributos">Complemento:</p><p> ${dados.complemento}</p>
    <p class="atributos">Bairro:</p><p> ${dados.bairro}</p>
    <p class="atributos">Cidade:</p><p> ${dados.localidade} - ${dados.uf}</p>`
    }
}