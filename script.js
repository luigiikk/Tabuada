function gerarTab(){
    var numero = document.getElementById('numero').value

    let i = 1
    var selectElement = document.getElementById('setab')
     selectElement.innerHTML = ''
     if (numero.length == 0){
        window.alert("Digite um numero válido")
     }else {
        while (i <= 10){
        const res = numero * i
        var novaOpcao = document.createElement('option')
        novaOpcao.value = res
        novaOpcao.text = `${numero} x ${i} = ${res}`
        selectElement.appendChild(novaOpcao)
        i++
    }
     }

}










