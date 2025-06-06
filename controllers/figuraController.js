// controllers/figuraController.js
const figuraService = require('../models/figuraService');

// --- Páginas de Opciones por Figura ---
exports.mostrarInicio = (req, res) => {
  res.render('inicio', { titulo: 'Calculadora Geométrica' }); // Nueva vista 'inicio.ejs'
};

exports.opcionesRombo = (req, res) => {
  res.render('figura_opciones', {
    titulo: 'Rombo',
    figuraNombre: 'Rombo',
    urlArea: '/rombo/area',
    urlPerimetro: '/rombo/perimetro',
  });
};

exports.opcionesPentagono = (req, res) => {
  res.render('figura_opciones', {
    titulo: 'Pentágono',
    figuraNombre: 'Pentágono Regular',
    urlArea: '/pentagono/area',
    urlPerimetro: '/pentagono/perimetro',
  });
};

exports.opcionesHexagono = (req, res) => {
  res.render('figura_opciones', {
    titulo: 'Hexágono',
    figuraNombre: 'Hexágono Regular',
    urlArea: '/hexagono/area',
    urlPerimetro: '/hexagono/perimetro',
  });
};

// --- Funciones Genéricas para Renderizar Formularios ---
// (Podríamos refactorizar esto más, pero así es claro para cada caso)

function renderizarFormulario(res, figuraNombre, tipoCalculo, actionUrl, inputs, datosEntrada = null, resultado = null, error = null) {
  res.render('formulario', {
    titulo: `${tipoCalculo} de ${figuraNombre}`,
    figuraNombre,
    tipoCalculo,
    actionUrl,
    inputs,
    datosEntrada,
    resultado,
    error,
  });
}

// --- Formularios de ÁREA ---
exports.formularioAreaRombo = (req, res) => {
  renderizarFormulario(res, 'Rombo', 'Área', '/rombo/area/calcular', [
    { name: 'diagonalMayor', label: 'Diagonal Mayor (D)', type: 'number', step: 'any' },
    { name: 'diagonalMenor', label: 'Diagonal Menor (d)', type: 'number', step: 'any' },
  ]);
};
exports.formularioAreaPentagono = (req, res) => {
  renderizarFormulario(res, 'Pentágono Regular', 'Área', '/pentagono/area/calcular', [
    { name: 'lado', label: 'Lado (s)', type: 'number', step: 'any' },
  ]);
};
exports.formularioAreaHexagono = (req, res) => {
  renderizarFormulario(res, 'Hexágono Regular', 'Área', '/hexagono/area/calcular', [
    { name: 'lado', label: 'Lado (s)', type: 'number', step: 'any' },
  ]);
};

// --- Formularios de PERÍMETRO ---
exports.formularioPerimetroRombo = (req, res) => {
  renderizarFormulario(res, 'Rombo', 'Perímetro', '/rombo/perimetro/calcular', [
    { name: 'lado', label: 'Lado (a)', type: 'number', step: 'any' },
  ]);
};
exports.formularioPerimetroPentagono = (req, res) => {
  renderizarFormulario(res, 'Pentágono Regular', 'Perímetro', '/pentagono/perimetro/calcular', [
    { name: 'lado', label: 'Lado (s)', type: 'number', step: 'any' },
  ]);
};
exports.formularioPerimetroHexagono = (req, res) => {
  renderizarFormulario(res, 'Hexágono Regular', 'Perímetro', '/hexagono/perimetro/calcular', [
    { name: 'lado', label: 'Lado (s)', type: 'number', step: 'any' },
  ]);
};


// --- Procesamiento de Cálculos de ÁREA ---
exports.procesarAreaRombo = (req, res) => {
  const { diagonalMayor, diagonalMenor } = req.body;
  const dM = parseFloat(diagonalMayor);
  const dm = parseFloat(diagonalMenor);
  const resultado = figuraService.calcularAreaRombo(dM, dm);
  renderizarFormulario(res, 'Rombo', 'Área', '/rombo/area/calcular',
    [
      { name: 'diagonalMayor', label: 'Diagonal Mayor (D)', type: 'number', step: 'any' },
      { name: 'diagonalMenor', label: 'Diagonal Menor (d)', type: 'number', step: 'any' },
    ],
    { diagonalMayor: dM, diagonalMenor: dm },
    resultado,
    resultado ? null : 'Valores inválidos. Asegúrate de ingresar números positivos.'
  );
};
exports.procesarAreaPentagono = (req, res) => {
  const { lado } = req.body;
  const s = parseFloat(lado);
  const resultado = figuraService.calcularAreaPentagono(s);
  renderizarFormulario(res, 'Pentágono Regular', 'Área', '/pentagono/area/calcular',
    [{ name: 'lado', label: 'Lado (s)', type: 'number', step: 'any' }],
    { lado: s },
    resultado,
    resultado ? null : 'Valor inválido. Asegúrate de ingresar un número positivo.'
  );
};
exports.procesarAreaHexagono = (req, res) => {
  const { lado } = req.body;
  const s = parseFloat(lado);
  const resultado = figuraService.calcularAreaHexagono(s);
  renderizarFormulario(res, 'Hexágono Regular', 'Área', '/hexagono/area/calcular',
    [{ name: 'lado', label: 'Lado (s)', type: 'number', step: 'any' }],
    { lado: s },
    resultado,
    resultado ? null : 'Valor inválido. Asegúrate de ingresar un número positivo.'
  );
};

// --- Procesamiento de Cálculos de PERÍMETRO ---
exports.procesarPerimetroRombo = (req, res) => {
  const { lado } = req.body;
  const s = parseFloat(lado);
  const resultado = figuraService.calcularPerimetroRombo(s);
  renderizarFormulario(res, 'Rombo', 'Perímetro', '/rombo/perimetro/calcular',
    [{ name: 'lado', label: 'Lado (a)', type: 'number', step: 'any' }],
    { lado: s },
    resultado,
    resultado ? null : 'Valor inválido. Asegúrate de ingresar un número positivo.'
  );
};
exports.procesarPerimetroPentagono = (req, res) => {
  const { lado } = req.body;
  const s = parseFloat(lado);
  const resultado = figuraService.calcularPerimetroPentagono(s);
  renderizarFormulario(res, 'Pentágono Regular', 'Perímetro', '/pentagono/perimetro/calcular',
    [{ name: 'lado', label: 'Lado (s)', type: 'number', step: 'any' }],
    { lado: s },
    resultado,
    resultado ? null : 'Valor inválido. Asegúrate de ingresar un número positivo.'
  );
};
exports.procesarPerimetroHexagono = (req, res) => {
  const { lado } = req.body;
  const s = parseFloat(lado);
  const resultado = figuraService.calcularPerimetroHexagono(s);
  renderizarFormulario(res, 'Hexágono Regular', 'Perímetro', '/hexagono/perimetro/calcular',
    [{ name: 'lado', label: 'Lado (s)', type: 'number', step: 'any' }],
    { lado: s },
    resultado,
    resultado ? null : 'Valor inválido. Asegúrate de ingresar un número positivo.'
  );
};