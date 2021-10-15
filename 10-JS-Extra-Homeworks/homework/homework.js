// No cambies los nombres de las funciones.

const { stringify } = require("git-url-parse");

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa
  // un par clave-valor en forma de matriz.
  //Ejemplo:
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let matriz = [];
  for (const key in objeto) {
    matriz.push([key, objeto[key]]);
  }
  return matriz;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  //Escribe tu código aquí
  string = string.split("").sort();
  let objeto = {}; //declaro objeto que se rellenará de key-contador
  let contador; // variable que filtrará todas las letras que sean iguales a la que se está evaluando
  string.forEach((letra) => {
    // comienza un ciclo para evaluar cada caracter
    string.forEach((e) => {
      //por cada caracter evaluado, se ejecuta otro ciclo para ver si hay otros caracteres similares en el resto de la cadena.
      contador = string.filter((e) => e === letra);
      //si hay caracteres similares, se los agrupan momentaneamente en la variable contadora
      objeto[letra] = contador.length;
      //Agrego una propiedad al objeto, con el mismo nombre que el caracter evaluado (uso corchetes porque es una variable)y asigno el valor de longitud de la variable contadora, para indicar las veces que se repite ese caracter en el string general.
    });
  });
  return objeto;
}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  s = s.split("");
  let mayFirst = [];
  s.forEach((e) => {
    if (e === e.toUpperCase()) mayFirst.push(e);
  }); //si un caracter es mayuscula lo agrego a mi nuevo array
  s.forEach((e) => {
    if (e === e.toLowerCase()) {
      mayFirst.push(e);
    } // agrego el resto de los array al final
  });
  return mayFirst.join("");
}

function asAmirror(str) {
  //La función recibe una frase.
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let div = str.split(" ");
  let stri = div.map((e) => {
    return e.split("").reverse().join("");
  });
  return stri.join(" ");
}

function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let aStr = numero.toString().split("").reverse().join("");
  numero = numero.toString();
  return aStr === numero ? "Es capicua" : "No es capicua";
}

function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let filtrado = cadena
    .split("")
    .filter((e) => e !== "a" && e !== "b" && e !== "c");
  return filtrado.join("");
}
// npm test 10-JS-Extra-Homeworks

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let orden = arr.sort((a, b) => {
    return a.length - b.length;
  });
  return orden;
}

function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  let nuev = [];
  arreglo1.forEach((e) => {
    arreglo2.forEach((j) => {
      if (e === j) nuev.push(e);
    });
  });
  return nuev;
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
