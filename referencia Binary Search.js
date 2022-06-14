const desorderedArray = [
  3, 9, 55, 101, 22, 2, 10, 11, 12, 35, 88, 999, 838, 232, 123, 777, 765, 762,
  1000, 1001, 9090, 99999, 754, 812,
];
const indioArray = [2, 6, 13, 21, 36, 47, 63, 81, 97];
const indioArrDesor = [13, 2, 6, 97, 81, 63, 47, 21, 36];

const BSwhileLoop = function (array, numBuscado) {
  // 1) Chequear si los inputs son válidos:
  //puedo usar distintos tipos de formas de chequear los inputs. Lo dejo a elección libre. Esto es una referencia:
  if (!array || typeof numBuscado !== "number") {
    return console.log("Ingrese (array, numero a buscar)");
  }

  //copiarlo para no mutar el original:
  const copyArray = [...array];
  // 2) Ordenar el array copiado:
  const srtArray = copyArray.sort((a, b) => a - b);

  // 3) Crear variables que van a ir conteniendo los valores de las referencias que voy a ir necesitando para ir acotando el array en secciones de mayor o menor al midIndex
  let iterations = 0; //optativa
  let minIndex = 0;
  let maxIndex = srtArray.length - 1;

  // 4) Creo while loop y creo la variable midIndex adentro del loop. *
  while (minIndex <= maxIndex) {
    iterations++;
    let midIndex = Math.floor((maxIndex + minIndex) / 2);

    if (numBuscado === srtArray[midIndex]) {
      return console.log(
        `Numero encontrado: "${numBuscado}"! En ${iterations} iteraciones. `
      );
    } else {
      if (numBuscado < srtArray[midIndex]) {
        maxIndex = midIndex - 1;
      } else {
        if (numBuscado > srtArray[midIndex]) {
          minIndex = midIndex + 1;
        }
      }
    }
  }
  // 5) Si el while loop no retorna nada es que no encontró el número. Por eso meto este return al final de la función.
  return "Número " + numBuscado + " no ha sido encontrado.";
};

// * EXPLICACIÓN DEL LOOP:
//el midIndex va a ser el número de comparación con el numBuscado. Va a ser el midIndex lo que se va a ir moviendo y chequeando la igualdad con el numBuscado. El minIndex y el maxIndex sirven para darle un valor a midIndex, que se tiene que ir cambiando con cada iteración. Y la forma en la que se va cambiando midIndex es con los cambios de minIndex y maxIndex dependiendo de cada loop. Al comienzo de cada loop el midIndex obtiene un valor nuevo. Ese valor es calculado por los valores actuales de minIndex y maxIndex. Cada loop va modificando el valor de minIndex o maxIndex. Al comenzar el loop nuevamente, los valores de minIndex y maxIndex son distintos a los que tuvieron en el loop anterior, por lo que midIndex también va a cambiar su valor, y chequea si este nuevo valor es === a numBuscado. Si no lo es, el loop modifica el valor de minIndex o maxIndex, dependiendo de la condición de si midIndex es mayor o menor a numBuscado. Si es numBuscado es menor a midIndex lo que va a suceder es acotar la búsqueda, descartando los elementos mayores de midIndex, y acotando a los elementos entre minIndex y midIndex - 1, dandole a maxIndex el valor de midIndex - 1. Y luego de hacer esto, inicia de vuelta un nuevo loop haciendo los chequeos nuevamente, con los nuevos valores de los Index's.
