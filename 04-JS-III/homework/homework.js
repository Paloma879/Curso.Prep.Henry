// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0]
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array [array.length -1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  // length sirve para obtener el largo del array
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  //primero recorre la matriz(largo de el arreglo) con la guia i , recordar que son enteros o sea numeros
  //luego el arreglo o la constante que es i , se le suma uno-
  //entonces de esa manera se podra en la iteracion ir agregando de forma constante 1 por ej: 1,2,3,4, etc.
  // Tu código:

  for (let i = 0; i < array.length; i++){

  array[i] = array [i] + 1;
  }
  return array
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // el push es un  metodo donde la matriz permite agregar un elemento al final de la misma,incrementando su longitud en 1
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
 // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;

   
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  //comprender que un recorrido de palabras dentro de la constante , tener en cuenta que los espacios y lo que pide
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var corregir= "";
  for (let i = 0; i < palabras.length; i++) {
    corregir = corregir + palabras [i]
    if(i !== palabras.length -1){
      corregir = corregir + " "
    }
  }

return corregir;
  }


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 for (let i = 0; i < array.length; i++) {
   if(array[i] === elemento) {
     return true;
   }

 }
     return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var finalidad = 0;
  for (var i = 0; i < numeros.length; i++) {
    finalidad = finalidad + numeros[i]

  }
  return finalidad;

}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let finalidad = 0;
  for(var i = 0; i < resultadosTest.length; i++ ){
    finalidad = finalidad + resultadosTest[i]
  }
  return finalidad / resultadosTest.length;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var max = numeros[0];
  for(var i = 1; i < numeros.length; i++) {
    if(numeros[i] > max) {
       max = numeros[i];
    }
    
  }
  return max;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  if (arguments.length < 1) return 0;
  let finalidad = 1;
  for(let i = 0; i < arguments.length; i++) {
    finalidad = finalidad * arguments[i]
  }
  return finalidad;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
