function geraCep() {
    console.log("cheguei")
    const pegaCep = document.getElementById('cep__').value
    fetch('https://api.postmon.com.br/v1/cep/'+pegaCep)
    .then(resp => resp.json())
    .then(info_cep => {

        // pegando os valores dos input
        let pegaRua = document.getElementById('logra__') 
        let pegaBairro = document.getElementById('bairro__')
        let pegaCidade = document.getElementById('cidade__')
        let pegaEstado = document.getElementById('estado__')

        // Dando o valor aos input e acordo com o nosso JSON
        pegaRua.value = info_cep.logradouro
        pegaBairro.value = info_cep.bairro
        pegaCidade.value = info_cep.cidade
        pegaEstado.value = info_cep.estado

    }) 
}