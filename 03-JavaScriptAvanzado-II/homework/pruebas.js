// Si la función recibe por parámetro un cero, entonces debe devolver false.

function sumarCostos(precio) {
    let precio;
  
    return function (otroPrecio) {
        if (otroPrecio === 0) {
          return false;
        }
        
    }
  
}

let calculo = sumarCostos(precio);
var uno = calculo(3);
console.log(uno);