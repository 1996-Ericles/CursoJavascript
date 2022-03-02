function teste1(num) {
    if (num > 7) 
        console.log(num)
        console.log('Final')
    
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7) ; { //cuidado com o ; , não usar com as estruturas de controle. Por causa do ; ta imprimindo tudo, sem o ; iria puxar o IF normal e imprimir apenas o que é > 7
        console.log(num)
       
    }
}

teste2(6)
teste2(8)