// nivel uma variavel vazia 
let nivel = ""

// somatorio entre vitoria e derrotas do jogador 
function resultado(vitorias, derrotas){
    
    let somaTotal = vitorias - derrotas
   
if(vitorias <= 10){
    nivel = "Ferro"
}
else if(vitorias >= 11 && vitorias <= 20){
    nivel = "Bronze"
}
else if(vitorias >= 21 && vitorias <= 50){
    nivel = "Prata"
}
else if(vitorias >= 51 && vitorias <= 80){
    nivel = "Ouro"
}
else if(vitorias >= 81 && vitorias <= 90){
    nivel = "Diamante"
}
else if(vitorias >= 91 && vitorias <= 100){
    nivel = "Lendário"
}
else {
    nivel = "Imortal"
}
    return somaTotal
    }
        let saldoVitoria = resultado(80, 15)//resultado entre a vitoria e a derrota do jogador 

            console.log(`O Heroi tem saldo de ${saldoVitoria} está no nível de ${nivel}`)
                

