//CREO QUE ESTO ES LA PRIMERA VEZ QUE HICE EL ALGORITMO MIRANDO
// EL VIDEO DEL INDIO.  NO SÉ QUÉ TAN BIEN ESTÁ ECHA. YO CREO QUE ESTÁ MUY BIEN.

const desorderedArray = [
  3, 9, 55, 101, 22, 2, 10, 11, 12, 35, 88, 999, 838, 232, 123, 777, 765, 762,
  1000, 1001, 9090, 99999, 754, 812,
];

const indioArray = [2, 6, 13, 21, 36, 47, 63, 81, 97];

//IMPORTANTE: Binary Searches sólo funcionan con arrays ordenados. Me tengo que asegurar que el array está ordenado antes de empezar a iterarlo.

function binarySearch(array, numABuscar) {
  if (!numABuscar) {
    return "Número a buscar no ingresado";
  }

  let length = array.length;
  let sortedArray = array.sort(function (a, b) {
    return a - b;
  });
  console.log(sortedArray);

  let iteraciones = 0;
  let endIndex = length - 1;
  let startIndex = 0;

  // console.log("length: " + length);
  // console.log("End index: " + endIndex);
  // console.log("Start index: " + startIndex);
  // console.log("Mid index: ");

  while (startIndex <= endIndex) {
    let midIndex = Math.floor((endIndex + startIndex) / 2);
    iteraciones++;
    if (numABuscar === sortedArray[midIndex]) {
      console.log("Encontrado! en " + iteraciones + " iteraciones.");
      return sortedArray[midIndex];
    } else {
      if (numABuscar < sortedArray[midIndex]) {
        endIndex = midIndex - 1;
      } else {
        if (numABuscar > sortedArray[midIndex]) {
          startIndex = midIndex + 1;
        }
      }
    }
  }

  return "Numero no encontrado en " + iteraciones + " iteraciones";
}
