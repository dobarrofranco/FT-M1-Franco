'use strict';

/* EJERCICIO 1
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  EJEMPLO 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/
function LinkedList() {
  this.head = null;
  this._lenght = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value) {
  let node = new Node(value);
  let current = this.head;
  if(!current) {
    this.head = node;
    this._lenght++;
    return value;
  } else {
    while (current.next) {   // es ir saltando de balsa en balsa  hasta que vea que no
                            // haya más
      current = current.next;
    }
    current.next = node;
    this._lenght++;
    return value;
  }
}
let miLista = new LinkedList();
// console.log(miLista.add(3));
// console.log(miLista.add(4));
// console.log(miLista.add(5));
// console.log(miLista.add(10));
// console.log(miLista);

LinkedList.prototype.remove = function() {
  let current = this.head;
  if (!current) {
    return null;
  } else if(!current.next) { // es decir, solo tenemos el head con nodo.
    let aux = current.value; // guardamos el valor del nodo que está en el head.
    this.head = null; // borramos el head.
    this._lenght--; 
    return aux; // retornamos el valor.
  }
  while (current.next.next) { // mientras haya un "tercero", uno adelante mio.
    current = current.next; // entonces salto a la siguiente balsa, aun teniendo disponible una balsa adelante para saltar. pero como la quiero eliminar no salto hacia ella.
  }

  let aux = current.next.value;
  current.next = null;
  this._lenght--;
  return aux;
}


// console.log(miLista);
// miLista.remove()
// miLista.remove()
// miLista.remove()
// console.log(miLista);

LinkedList.prototype.search = function(parameter) {
  let current = this.head;
  if (!current) {
    return false;
  }
  while (current) {
    if (typeof parameter === 'function') {
      if (parameter(current.value)) return current.value;
    }else {
      if (current.value === parameter) return current.value;
    }
    current = current.next;
  }
  return null;
}

// let cb = function () {
//   return 2 * 2;
// }

// console.log(miLista.add(cb()));
// console.log(miLista);
// console.log(miLista.search(3));
// console.log(miLista.search(cb));

/* EJERCICIO 2
Implementar la clase HashTable.
Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar 
  la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;
}

// let nombre = "Franco"
// console.log(nombre.charCodeAt());

HashTable.prototype.hash = function(key) {
  let suma=0;
  for (let i of key) {
    suma += i.charCodeAt()
  }
  return suma % this.numBuckets; // posición
}

HashTable.prototype.set = function(key, value) {
  let pos = this.hash(key);
  if (!this.buckets[pos]) {
    this.buckets[pos] = {};
  }
  return this.buckets[pos][key] = value;
}

HashTable.prototype.get = function(key) {
  let pos = this.hash(key);
  return this.buckets[pos][key];
}

HashTable.prototype.hasKey = function(key) {
  let pos = this.hash(key);
  if (this.buckets[pos][key]) {
    return true;
  }
  return false;
}

// let miHash = new HashTable();
// console.log(miHash.hash("Franco"));
// console.log(miHash.hash("Franco"));
// console.log(miHash.set('Franco', 'franco@gmail.com'));
// console.log(miHash.set('Robinson', 'robinson@gmail.com'));
// console.log(miHash);
// console.log(miHash.get("Franco"));
// console.log(miHash.hasKey("Franco"));

// ● HashTable › deberia devolver booleanos para el metodo #hasKey

// expect(received).toBe(expected) // Object.is equality

// Expected: false
// Received: true

//   174 |     hashTable.set('foobar', 'fluf cats');
//   175 |     expect(hashTable.hasKey('foobar')).toBe(true);
// > 176 |     expect(hashTable.hasKey('raboof')).toBe(false);
//       |                                        ^
//   177 |   });
//   178 |
//   179 | });

//   at Object.<anonymous> (tests/DataStructureII.test.js:176:40)


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   Node,
   LinkedList,
   HashTable,
};
