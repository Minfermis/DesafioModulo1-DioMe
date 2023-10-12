# Encontrando o Maior Valor Par e o Menor Valor Ímpar

Este é um código JavaScript que encontra o maior valor par e o menor valor ímpar em um conjunto de números. O código inclui funções auxiliares para leitura de entrada e exibição de resultados.

## Função Auxiliar (auxiliares-des2.js)

Neste arquivo, temos duas funções:

- `gets()`: Esta função simula a leitura de valores a partir de uma fonte de entrada, como um teclado ou um arquivo. Ela usa um array chamado `entradas` e uma variável `i` para controlar a posição atual de leitura no array. A cada chamada da função `gets()`, ela retorna o próximo valor do array e avança a posição de leitura.

- `print(texto)`: Esta função recebe um argumento de texto e imprime esse texto no console (geralmente a janela de saída no ambiente de desenvolvimento).

## Programa Principal

Aqui está o programa principal que utiliza as funções acima para encontrar o maior valor par e o menor valor ímpar em um conjunto de números.

1. Primeiro, o programa importa as funções `gets` e `print` do arquivo `auxiliares-des2.js`.

2. Em seguida, o programa lê a quantidade de números a serem processados através da função `gets()`, e armazena esse valor na variável `N`.

3. Ele também define duas variáveis, `MaiorValorPar` e `MenorValorImpar`, como nulas para acompanhar o maior valor par e o menor valor ímpar encontrados.

4. O programa entra em um loop `for`, que irá rodar `N` vezes, onde `N` é a quantidade de números a serem processados.

5. A cada iteração do loop, o programa lê um número usando a função `gets()` e armazena-o na variável `numero`.

6. Em seguida, verifica se `numero` é par ou ímpar. Se for par (ou seja, o resto da divisão por 2 é igual a 0), ele verifica se `MaiorValorPar` é nulo ou se `numero` é maior do que o valor atual de `MaiorValorPar`. Se for o caso, `MaiorValorPar` é atualizado com o valor atual de `numero`.

7. Se o `numero` for ímpar, ele verifica se `MenorValorImpar` é nulo ou se `numero` é menor do que o valor atual de `MenorValorImpar`. Se for o caso, `MenorValorImpar` é atualizado com o valor atual de `numero`.

8. Após o término do loop, o programa utiliza a função `print()` para imprimir o maior valor par e o menor valor ímpar encontrados.

9. O programa exibe as mensagens com os resultados no console.
