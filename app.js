require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;


hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

// Servir contenido estático
app.use( express.static('public') )

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Egor Villanueva',
    titulo: 'Curso de Node'
  })
})

app.get('/generic', function (req, res) {
  res.render('generic', {
    nombre: 'Egor Villanueva',
    titulo: 'Curso de Node'
  })
})

app.get('/elements', function (req, res) {
    res.render('elements', {
      nombre: 'Egor Villanueva',
      titulo: 'Curso de Node'
    })
  })

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${ port }`);
})