// nivel variavel vazia 
let nivel = ""

// somatorio entre a  vitorias e derrotas do jogador 
function resultado(vitorias, derrotas){

    let somaTotal = vitorias - derrotas

switch (true){
    case vitorias <= 10:
        nivel = "Ferro";
        break;

    case vitorias >= 11 && vitorias <= 20:
        nivel = "Bronze";
        break;

    case vitorias >= 21 && vitorias <= 50:
        nivel = "Prata";
        break;

    case vitorias >= 51 && vitorias <= 80:
        nivel = "Ouro";
        break;

    case vitorias >= 81 && vitorias <= 90:
        nivel = "Diamante";
        break;

    case vitorias >= 91 && vitorias <= 100:
        nivel = "Lensario";
        break;

        default:
        vitorias >= 101;
        nivel = "Imortal"

}
    return somaTotal
    }
       // resultado entre a  vitorias e derrotas  do jogador   
        let saldoVitoria = resultado(20, 5)

        console.log (`O Heroi tem saldo de ${saldoVitoria} vitorias e está no nível de ${nivel}`);