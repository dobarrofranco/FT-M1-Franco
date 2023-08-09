'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  
  if (array.length <= 1) {
    return array;
  }
  
  let pivote = array[array.length - 1];
  let izq = [];
  let der = [];
  let medio = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivote) {
        izq.push(array[i]);
    } 
    else if (array[i] > pivote) {
      der.push(array[i]);
    } 
    else {
      medio.push(array[i]);
    }
  }

    
  return quickSort(izq).concat(medio).concat(quickSort(der));

}

// let arr = [2, 45, 6, 7, 8, 98, 1];
// console.log(quickSort(arr));

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length < 2) {
    return array;
  }

  let resultado = Math.floor(array.length / 2);
  let izq = array.slice(0, resultado);
  let der = array.slice(resultado);

  array = [];

  izq = mergeSort(izq);
  der = mergeSort(der);

  while(izq.length && der.length) {
    if (izq[0] < der[0]) array.push(izq.shift()); // pushearle a array el primer elemento de izq pero sacandolo al mismo tiempo de izq.
    else array.push(der.shift());
  }

  return array.concat(izq, der);

  
  // resultado = Math.floor(array.length / 2);
  
  // izq = array.splice(0, resultado);

  // der = array.splice(0, array.length);
  
  // // funcion ordenar

  // for (let i = 0; i < largo; i++) {
  //   for (let j = i + 1; j < largo; j++) {
  //     if (izq[i] > izq[j]) {
  //       let aux = izq[i]; //
  //       izq[i] = izq[j]; // el mas grande igual al mas chico
  //       izq[j] = aux;
  //     }
  //     if (der[i] > der[j]) {
  //       let aux = der[i]; //
  //       der[i] = der[j]; // el mas grande igual al mas chico
  //       der[j] = aux;
  //     }

  //   }
  // }

  // completo = completo.concat(izq).concat(der);
  
  // for (let i = 0; i < largo; i++) {
  //   for (let j = i + 1; j < largo; j++) {
  //     if (completo[i] > completo[j]) {
  //       let aux = completo[i]; //
  //       completo[i] = completo[j]; // el mas grande igual al mas chico
  //       completo[j] = aux;
  //     }
      
  //   }
  // }

  // return mergeSort(array).concat(completo);
  
}

  // parte a la mitad
  // devuelve a la izq y a la der

let arr = [2, 45, 6, 7, 8, 98, 1];
console.log(mergeSort(arr));


  // izq[] < ó > der[]
  // los concatena pero en orden.
  // juntar... [ordenado]


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
