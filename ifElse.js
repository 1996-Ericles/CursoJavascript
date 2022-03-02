const imprimirResultado = function(nota) {
    if (nota >= 7) {
        console.log('Aprovado!')
    } else {
    console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('Epa!') // cuidado. JS é uma linguagem fracamente tipada, desta forma está aceitando a string para algo que deveria ser um valor númérico. 