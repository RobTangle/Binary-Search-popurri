// CÓDIGO PARA EXPERIMENTAR!
////  NO USAR ESTO COMO CÓDIGO MODELO O DE REFERENCIA PORQUE
// PUEDEN HABER ERRORES LETAL SIN AVISO!
const desorderedArray = [
  3, 9, 55, 101, 22, 2, 10, 11, 12, 35, 88, 999, 838, 232, 123, 777, 765, 762,
  1000, 1001, 9090, 99999, 754, 812,
];
const indioArray = [2, 6, 13, 21, 36, 47, 63, 81, 97];
const indioArrDesor = [13, 2, 6, 97, 81, 63, 47, 21, 36];

const recursiveBS = function (array, numBuscado) {
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
