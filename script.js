function Verificar() {
    var inicio = document.getElementById('txtnum')
    var fim = document.getElementById('txtnum2')
    var passo = document.getElementById('txtnum3')
    var res = document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = ('[ERRO] insira seus dados novamente.PF')
    } else {
        res.innerHTML = ('Contando...')
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        for(var c = i; c <= f; c += p)
            res.innerHTML += `${c},`
    }
}