function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 12) {
                //criança
                img.setAttribute('src', 'bebeMenino.png')
            } else if (idade >= 12 && idade < 18) {
                //adolescente
                img.setAttribute('src', 'jovemHomem.png')
            } else if (idade >= 18 && idade < 60) {
                //adulto
                img.setAttribute('src', 'AdultoHomem.png')
            } else {
                //idoso
                img.setAttribute('src', 'idosoHomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 12) {
                //criança
                img.setAttribute('src', 'bebeMenina.png')
            } else if (idade >= 12 && idade < 18) {
                //adolescente
                img.setAttribute('src', 'jovemMulher.png')
            } else if (idade >= 18 && idade < 60) {
                //adulto
                img.setAttribute('src', 'AdultoMulher.png')
            } else  {
                //idoso
                img.setAttribute('src', 'idosaMulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
        res.appendChild(img)
    }
}