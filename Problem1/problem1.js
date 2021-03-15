/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

var multiplos = [];

// identificando os números divisíveis por 3 e 5
for (var i = 1; i < 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0){
    multiplos.push(i);
  }
}

soma = 0;
// somando os números
for(var i = 0; i < multiplos.length; i++){
    soma += multiplos[i];
}
console.log(multiplos);
console.log(soma);
