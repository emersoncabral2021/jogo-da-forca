var palavraSecreta = [
    {
        palavra: 'nissan',
        pista_1: 'Marca de um veiculo',
        pista_2: 'De origem Japonesa'
        
    },
    {
        palavra: 'laranja',
        pista_1: 'Uma fruta',
        pista_2: 'Rica em vitamina'
        
    },
    {
        palavra: 'baiacu',
        pista_1: 'Um peixe',
        pista_2: 'Origem na America do sul'
        
    },
    {
        palavra: 'espanha',
        pista_1: 'Um país de linguagem de origem latim',
        pista_2: 'Nome de uma cidade é Sevilha'
        
    },
    {
        palavra: 'basquete',
        pista_1: 'joga com mais de cinco jogadores',
        pista_2: 'Criado no Estado Unidos'
        
    },
    {
        palavra: 'ferrari',
        pista_1: 'Veiculo pra esporte competitivo',
        pista_2: 'Famosa por sua cor'
        
    },
    {
        palavra: 'bipolar',
        pista_1: 'Pessoa que mudar de humor derrenpete',
        pista_2: 'Não acontecer só com mulheres'
        
    },
    {
        palavra: 'xaomi',
        pista_1: 'Marca de celular',
        pista_2: 'Criado na china'
        
    }
    
]
var dica1 = document.getElementById('dica_1')
var dica2 = document.getElementById('dica_2')
var palavraforca = document.getElementById('palavraforca')
var palavrafor = document.getElementById('palavrafor')
var palavraAleatoria = parseInt(Math.random()*palavraSecreta.length)
var letra = document.getElementById('letra')
var chance = 6


function selecionarpalavra(){
    var selecionarpalavra = document.getElementById('selecionarpalavra').disabled = true
    var bnt_letra = document.getElementById('bnt_letra').disabled = false
    var bnt_palavra = document.getElementById('bnt_palavra').disabled = false
    dica1.innerHTML = '1.' + palavraSecreta[palavraAleatoria].pista_1
    dica2.innerHTML = '2.' + palavraSecreta[palavraAleatoria].pista_2
    for(var i = 0;i < palavraSecreta[palavraAleatoria].palavra.length;i++){
        palavraforca.innerHTML += '<input  maxlength="1" type="text" value="" id=p' + [i] + '>' + '  ' 
    }
    
}

function verificarletra(){
    var verificarletra = document.getElementById('verificarletra')
    var valorletra = (verificarletra.value)
    var chances = document.getElementById('chances')
    var palavraarray = palavraSecreta[palavraAleatoria].palavra.split('') 
    var letra = palavraSecreta[palavraAleatoria].palavra.match(valorletra) 
    var indice = []
    var indiceletra = palavraarray.indexOf(valorletra)
    //palavraarray para transforma cada letra da palavraaecreta em array
    //indice onde vai fica o indice da letra procurada
    //indiceletra vai procura em cada indice a letra do valorletra

    if(letra == null){
        chance--
        alert('vc errou a letra')
        if(chance == 0){
            alert('vc morreu')
            document.getElementById('verificarletra').disabled = true
            document.getElementById('verificarpalavra').disabled = true  
            document.getElementById('bnt_letra').disabled = true
            document.getElementById('bnt_palavra').disabled = true
            document.getElementById('reiniciar').disabled = false
            for(var i = 0;i < palavraSecreta[palavraAleatoria].palavra.length;i++){
                palavraforca.innerHTML = "" 
            }
            for(var i = 0;i < palavraSecreta[palavraAleatoria].palavra.length;i++){
                palavraforca.innerHTML += '<input  maxlength="1" type="text" value="' + palavraarray[i] + '" id=p' + [i] + '>' + '  ' 

            }
        }
    } 
    if(letra != null){
        while(indiceletra != -1){
             if(indiceletra != -1){
                indice.push(indiceletra)
                indiceletra = palavraarray.indexOf(valorletra,indiceletra + 1)
                document.getElementById('p'+ [indice]).value = letra
                indice.pop(indiceletra) 
             }
                
    }
}
verificarletra.value = ''
chances.innerHTML = 'Chance restante: ' + chance
}

function verificarpalavra(){
    var verificarpalavra = document.getElementById('verificarpalavra')
    var valorpalavra = (verificarpalavra.value)
    var letra = palavraSecreta[palavraAleatoria].palavra.localeCompare(valorpalavra)
    if(letra == 0){
        alert('vc acertou a palavra')
    }else{
        chance--
        alert('vc errou a palavra')
        if(chance == 0){
            alert('vc morreu')
            document.getElementById('verificarletra').disabled = true
            document.getElementById('verificarpalavra').disabled = true  
            document.getElementById('bnt_letra').disabled = true
            document.getElementById('bnt_palavra').disabled = true
            document.getElementById('reiniciar').disabled = false
            for(var i = 0;i < palavraSecreta[palavraAleatoria].palavra.length;i++){
                palavraforca.innerHTML = "" 
            }
            for(var i = 0;i < palavraSecreta[palavraAleatoria].palavra.length;i++){
                palavraforca.innerHTML += '<input  maxlength="1" type="text" value="' + palavraarray[i] + '" id=p' + [i] + '>' + '  ' 

            }

    }
    }  
    chances.innerHTML = 'Chance restante: ' + chance
    verificarpalavra.value = ''    
}

function reiniciar(){
    var selecionarpalavra = document.getElementById('selecionarpalavra').disabled = false
    document.getElementById('reiniciar').disabled = true
    dica1.innerHTML = ""
    dica2.innerHTML = ""
    palavraforca.innerHTML = ""
    chances.innerHTML = 'Chance restante: 6'

}