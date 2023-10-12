
// 2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print } = require('./auxiliares-des2.js');

const N = gets();

let MaiorValorPar = null;
let MenorValorImpar = null;

for (let i = 0; i < N; i++){
    const numero = gets();
    if (numero % 2 === 0){
        if (MaiorValorPar === null || numero > MaiorValorPar){
            MaiorValorPar = numero;
        }  
    }
    else {
        if (MenorValorImpar === null || numero < MenorValorImpar){
            MenorValorImpar = numero
        }
     }
}


print("O maior valor par é:  " + MaiorValorPar);
print("O menor valor impar é: " +MenorValorImpar);
