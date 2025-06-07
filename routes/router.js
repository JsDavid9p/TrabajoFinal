// routes/router.js
const express = require('express');
const router = express.Router();
const figuraController = require('../controllers/figuraController');

// Página de inicio (opcional, podría ser una selección de figuras)
router.get('/', figuraController.mostrarInicio);

// Rutas para cada figura (página de opciones: calcular área o perímetro)
router.get('/rombo', figuraController.opcionesRombo);
router.get('/pentagono', figuraController.opcionesPentagono);
router.get('/hexagono', figuraController.opcionesHexagono);

// Rutas para mostrar formularios de ÁREA
router.get('/rombo/area', figuraController.formularioAreaRombo);
router.get('/pentagono/area', figuraController.formularioAreaPentagono);
router.get('/hexagono/area', figuraController.formularioAreaHexagono);

// Rutas para mostrar formularios de PERÍMETRO
router.get('/rombo/perimetro', figuraController.formularioPerimetroRombo);
router.get('/pentagono/perimetro', figuraController.formularioPerimetroPentagono);
router.get('/hexagono/perimetro', figuraController.formularioPerimetroHexagono);

// Rutas para procesar cálculos de ÁREA
router.post('/rombo/area/calcular', figuraController.procesarAreaRombo);
router.post('/pentagono/area/calcular', figuraController.procesarAreaPentagono);
router.post('/hexagono/area/calcular', figuraController.procesarAreaHexagono);

// Rutas para procesar cálculos de PERÍMETRO
router.post('/rombo/perimetro/calcular', figuraController.procesarPerimetroRombo);
router.post('/pentagono/perimetro/calcular', figuraController.procesarPerimetroPentagono);
router.post('/hexagono/perimetro/calcular', figuraController.procesarPerimetroHexagono);

module.exports = router;