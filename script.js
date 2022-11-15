function contar() {
    let inicio = window.document.getElementById('nu1')
    let fim = window.document.getElementById('nu2')
    let passo = window.document.getElementById('pass')
    let res = window.document.getElementById('res')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449} `
        } 
    } else {
        //Contagem regressiva
        for(let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{1F449}`
        }

    }
    res.innerHTML += `\u{1F3C1}`
}
} 