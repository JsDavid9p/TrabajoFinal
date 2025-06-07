// app.js
const express = require('express');
const path = require('path');
const mainRouter = require('./routes/router'); // Importa tu router

const app = express();
const port = 3000; // Puedes usar el puerto que prefieras

// Configurar el motor de vistas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Le dice a Express dónde están tus vistas

// Middleware para parsear datos de formularios (URL-encoded)
// ESTA LÍNEA ES CRUCIAL Y DEBE ESTAR AQUÍ:
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (como style.css) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Usar las rutas definidas en router.js
app.use('/', mainRouter); // Monta el router en la raíz o en un prefijo como '/calculadora'

// Iniciar el servidor
app.listen(port, () => {
  console.log('Aplicación escuchando en http://localhost:${port}');
});