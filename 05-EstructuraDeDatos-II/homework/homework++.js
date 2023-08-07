// // tiene que usar closure!

// function construirCasas (bolsas) { //* ✔

//     return function casas (cantidadCasas) {
//         let calculo = bolsas/cantidadCasas; // ❤-❤ ?
//         // closure caca 💔  
//         if (cantidadCasas <= 0) {
//             return "Por favor ingresar cuantas casas quieres construir";
//         }
//         if (bolsas < 10) {
//             return "No se puede construir casas con esa cantidad de bolsas";
//         }

//         if (calculo >= 10) {
//             return true
//         } else {
//             return 'Solo puedes construir esta cantidad de casas: ' + Math.floor(bolsas / 10 );
//         }

//     }
// }
// let casas = construirCasas(100)
// console.log(casas(11));








function LinkedList() {
    this.head = null;
    this._lenght = 0;
}
  
  function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.addFirst = function(value) {
    let newNode = new Node(value); // nosotros cuando inicializamos la función, lo primero que hace es que el valor que le pones sea la variable "newNode"
    
    if(!this.head) {
      this.head = newNode;
      this._lenght++;
      return value;
    }else { 
        // si la lista no está vacia. El next de este newNode (2) que se agrego al comienzo de la función, pasa a ser el this.head, es decir, el (1).
        newNode.next = this.head; 
     // node(2).next = node(1)
        
        // y el head ahora lo igualamos a ese newNode que acabamos de agregar.
        this.head = newNode;
        
        this._lenght++;
        return value;
    }
}

LinkedList.prototype.printList = function() {
    let current = this.head;
    const array = [];

    while (current) {
        array.push(current.value);
        current = current.next;
    }

    return array.join(" -> ")
}


LinkedList.prototype.addMiddle = function() {
    let newNode = new Node(value);
    let division1 = this._lenght / 2;
    let division2 = this._lenght / 2;

    if(!this.head) {
        this.head = newNode;
        this._lenght++;
        return value;
    } else {
        if (division1 === division2)
    }
}

// let miLista = new LinkedList();
// console.log(miLista.addFirst("1"));
// console.log(miLista.addFirst("2"));
// console.log(miLista.addFirst("3"));
// console.log(miLista.addFirst("4"));

// console.log(miLista.printList());

// console.log(miLista);
