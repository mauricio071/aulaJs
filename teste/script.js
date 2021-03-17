var num = document.querySelector('input#num')
var tab = document.querySelector('select#tab')
var res = document.querySelector('div#res')
var valores = []

function adicionar() {
    if(num.value.length == 0) {
        alert('erro')
    }else { 
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        tab.appendChild(item)
    }
}

function finalizar() {
    if(num.value.length == 0) {
        alert('erro')
    }else {
        var maior = 0
        var menor = 0
        var soma = 0
        var med = 0

        for(var c = 0; c < valores.length; c++) {
            soma += valores[c]
            if (c == 0 || valores[c] < menor)
                menor = valores[c]
            else if(valores[c] > maior)
                     maior = valores[c]
        }
        med = soma / valores.length

        res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>` 
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${med}</p>`
    }


}