// models/figuraService.js

/**
 * Calcula el área de un rombo.
 * @param {number} diagonalMayor - La diagonal mayor del rombo.
 * @param {number} diagonalMenor - La diagonal menor del rombo.
 * @returns {object} Un objeto con el área o null si la entrada es inválida.
 */
function calcularAreaRombo(diagonalMayor, diagonalMenor) {
  if (isNaN(diagonalMayor) || isNaN(diagonalMenor) || diagonalMayor <= 0 || diagonalMenor <= 0) {
    return null;
  }
  const area = (diagonalMayor * diagonalMenor) / 2;
  return { valor: area.toFixed(2) };
}

/**
 * Calcula el perímetro de un rombo.
 * @param {number} lado - La longitud de un lado del rombo.
 * @returns {object} Un objeto con el perímetro o null si la entrada es inválida.
 */
function calcularPerimetroRombo(lado) {
  if (isNaN(lado) || lado <= 0) {
    return null;
  }
  const perimetro = 4 * lado;
  return { valor: perimetro.toFixed(2) };
}

/**
 * Calcula el área de un pentágono regular.
 * @param {number} lado - La longitud de un lado del pentágono.
 * @returns {object} Un objeto con el área o null si la entrada es inválida.
 */
function calcularAreaPentagono(lado) {
  if (isNaN(lado) || lado <= 0) {
    return null;
  }
  const area = (5 * Math.pow(lado, 2)) / (4 * Math.tan(Math.PI / 5));
  return { valor: area.toFixed(2) };
}

/**
 * Calcula el perímetro de un pentágono regular.
 * @param {number} lado - La longitud de un lado del pentágono.
 * @returns {object} Un objeto con el perímetro o null si la entrada es inválida.
 */
function calcularPerimetroPentagono(lado) {
  if (isNaN(lado) || lado <= 0) {
    return null;
  }
  const perimetro = 5 * lado;
  return { valor: perimetro.toFixed(2) };
}

/**
 * Calcula el área de un hexágono regular.
 * @param {number} lado - La longitud de un lado del hexágono.
 * @returns {object} Un objeto con el área o null si la entrada es inválida.
 */
function calcularAreaHexagono(lado) {
  if (isNaN(lado) || lado <= 0) {
    return null;
  }
  const area = (3 * Math.sqrt(3) * Math.pow(lado, 2)) / 2;
  return { valor: area.toFixed(2) };
}

/**
 * Calcula el perímetro de un hexágono regular.
 * @param {number} lado - La longitud de un lado del hexágono.
 * @returns {object} Un objeto con el perímetro o null si la entrada es inválida.
 */
function calcularPerimetroHexagono(lado) {
  if (isNaN(lado) || lado <= 0) {
    return null;
  }
  const perimetro = 6 * lado;
  return { valor: perimetro.toFixed(2) };
}

module.exports = {
  calcularAreaRombo,
  calcularPerimetroRombo,
  calcularAreaPentagono,
  calcularPerimetroPentagono,
  calcularAreaHexagono,
  calcularPerimetroHexagono,
};