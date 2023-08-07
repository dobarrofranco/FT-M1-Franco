'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol ☑
  - insert: agrega un nodo en el lugar correspondiente ☑
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol ☑
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.right = null;
   this.left = null;
}

BinarySearchTree.prototype.insert = function (value) {
   let subTree = new BinarySearchTree(value)

   if (value < this.value) {
      if (this.left === null) {
         this.left = subTree;

      } else {
         this.left.insert(value);

      }
   }

   if (value >= this.value) {
      if (this.right === null) {
         this.right = subTree;

      } else {
         this.right.insert(value);

      }
   }
   
}

BinarySearchTree.prototype.size = function() {
   let suma=0;
   if (this.value || this.value === 0) {
      suma++;
   }

   if (this.right) {
      suma+=this.right.size();
   }

   if(this.left) {
      suma+=this.left.size();
   }

   return suma;
}

BinarySearchTree.prototype.contains = function(parameter) {
   if (this.value === undefined && this.right === null && this.left === null ) {
      return false;
   }

   if (this.value === parameter) {
      return true;
   }


   if (this.left && this.left.contains(parameter)) {
      return true;
   }

   if (this.right && this.right.contains(parameter)) {
      return true;
   }
   
   return false;
   
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, string) {
   //in-order => left, root, right
   //pre-order => root, left, right
   //post-order => left, right, root
   
   if (string === "in-order" || string === undefined) {
      if (this.left && this.left.depthFirstForEach(cb, string));
      cb(this.value);
      if (this.right && this.right.depthFirstForEach(cb, string));
   }

   if (string === "pre-order") {
      cb(this.value);
      if (this.left && this.left.depthFirstForEach(cb, string));
      if (this.right && this.right.depthFirstForEach(cb, string));
   }

   if (string === "post-order") {
      if (this.left && this.left.depthFirstForEach(cb, string));
      if (this.right && this.right.depthFirstForEach(cb, string));
      cb(this.value);
   }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array=[]){
   cb(this.value);
   
   if (this.left) {
      array.push(this.left);
   }

   if (this.right) {
      array.push(this.right);
   }
   

   if (array.length) {
      array.shift().breadthFirstForEach(cb, array);
   }
}

// let valuesToInsert = [1, 2, 7, 8]
// let cb = function() {
//    valuesToInsert.forEach(function(value){
//        miTree.insert(value);
//    });
// };
let miTree = new BinarySearchTree()
// console.log(miTree.insert(1));
// console.log(miTree.insert(2));
// console.log(miTree.insert(7));
// console.log(miTree.insert(8));
// console.log(miTree);
// console.log(miTree.depthFirstForEach(cb, "in-order"));
// console.log(miTree.contains());
// console.log(miTree.contains(7));
// console.log(miTree.contains(8));
// console.log(miTree.contains(3));
// console.log(miTree.size());

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
