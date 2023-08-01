'use strict';

function BinarioADecimal(num) {
   num = num.split("").reverse();
   let suma=0;
   for (let i = 0; i < num.length; i++) {
      suma += (2 ** i) * num[i];
   }
   return suma;

}

let bin = "110100"
console.log(BinarioADecimal(bin));

function DecimalABinario(num) {

   let binary = "";
   while (num > 0) {
      let digito = num % 2;
      num = Math.floor(num / 2);
      binary = digito + binary;
   }   
   return binary
}

let num = 52;
console.log(DecimalABinario(num));

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
