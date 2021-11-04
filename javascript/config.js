function formss(posicao, campo) {
    let verificar = document.querySelectorAll('input')
    if (verificar[posicao].value) {
        alert(campo+' verificado: ' + verificar[posicao].value)
    }else {
        alert('Preencha todos os campos!')
    }

}
function conferencia() {
    let verificar = document.querySelectorAll('input')
    let textareaa = document.querySelector('textarea')
    for(let c = 0; c <= 2; c++) {
        if(verificar[c].value){
            if(textareaa.value) {
                alert('Ola '+ verificar[0].value+' Estamos enviando seu formulario ')
                break
            }else {
                alert('Faltou o campo de mensagem!')
                break
            }
            break
        }else{
            alert('Faltou preencher o '+verificar[c].type)
            break
        }
    }

}