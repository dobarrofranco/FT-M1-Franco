'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código: // menor numero primo divisor
  /* 
  [1, 2, 2, 3, 3, 5]
  180 / 2
  90 / 2
  45 / 3
  15 / 3
  5 / 5
  1 => terminó
  */
  var divisores = [1];
  var divisor = 2;
  while (num > 1) {
    if (num % divisor === 0) {
      divisores.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }
  console.log(divisores);
  return divisores;
}



function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código: //  compara por pares

  let ordenado = false;

  while (ordenado) {
    ordenado = true;
    for (let i = 0; i < array.length - 1; i++) {

      if (array[i] > array[i + 1]) {
        let aux = array[i];
        array[i] = array[i + 1]; // des.
        array[i + 1] = aux; // aparece 
        ordenado = false;
      }

    }
  }
  return array;

}

let arr = [1, 2, 8, 4, 5, 9, 10];

console.log(bubbleSort(arr));


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for (let i = 1; i < array.length; i++) {
    var aux = array[i];
    var j = i - 1;
    while (j >= 0 && aux < array[j]) { 
      array[j + 1] = array [j];
      j--;
    }
    array[j + 1] = aux;
  }
  return array;
}

// let arr1 = [5, 7, 3, 1,];
// console.log(insertionSort(arr1));

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código: // busca el mas chico de todo el array y lo pone al principio, así sucesivamente hasta que quede de menor a mayor, siempre recorro todo el array.

  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    let aux = array[i];
    array[i] = array[minIndex]; // el elemento de minIndex es el que encontro mas chiquito del primero con que arrancamos [0];
    // entonces array[0] = al mas chico!
    array[minIndex] = aux; // ese elemento mas chico en la posición donde lo encontramos va a ser igual al array[0] con el que empezamos a comparar todo el arreglo.
  }
  return array;
}

// let arr2 = [18, 9, 6, 7, 2, 8];

// console.log(selectionSort(arr2));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
