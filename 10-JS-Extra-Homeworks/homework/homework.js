// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  function cantidadDeRepeticiones(string,x){
    var suma = 0;   
    for(var i = 0 ; i < string.length ; i++){
          if( string[i]===x){
               suma += 1;
            }
      }  
    return(suma);
  }
  
  var repetidos = {};
  for(x = 0 ; x < string.length ; x++){
      repetidos[string[x]]=cantidadDeRepeticiones(string,string[x]);
      }
      return(repetidos);
  
    // string = string.split('');
    // repetidos = {};
    // temporal = {};
    // for(x = 0 ; x < string.length ; x++){
    //     temporal[string[x]] = string.filter(function(elemento){
    //         return elemento===string[x];
    //     })
    //     repetidos[string[x]]=temporal[string[x]].length;
    // }
    // return(repetidos);
}
    
        

           
  
  
  


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var temporal = [];
  var s = s.split('');
  for(var x = s.length - 1;x >= 0;x--){
      if (s[x]===s[x].toUpperCase()){
          temporal.unshift(s[x]); delete s[x];
        }
    }
  return(temporal.join('') + s.join(''));
}
                
  


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var palabraSeparada = str.split(' ');
  var textoInvertido = palabraSeparada.map(function(elemento){
    return elemento.split('').reverse().join('');
  })
  return textoInvertido.join(' ');
} 
          
        



function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numeroInvertido = numero.toString().split('').reverse().join('');
  if(numeroInvertido===numero.toString()){
    return "Es capicua";
  }
  else{
    return "No es capicua";
  }
}



function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var arraycadena = cadena.split('');
  var caracteresEliminados = arraycadena.filter(function(elemento){
    return elemento !== 'a' && elemento !== 'b' && elemento !== 'c';
  })
  return caracteresEliminados.join('');
}



function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var ordenados = arr.sort(function(a,b){
    return a.length - b.length;
    });
    return ordenados;
}




function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var iguales = [];
  for(x = 0 ; x < arreglo1.length ; x++){
    for(j = 0 ; j < arreglo2.length ; j++){
      if( arreglo1[x] === arreglo2[j] ){
        iguales.push(arreglo1[x]);
      }
    }
  }
  return iguales;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

