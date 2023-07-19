import {Request, Response} from "express";

const express = require('express');
const {engine} = require('express-handlebars');
const handlers = require('./lib/handlers')
const bodyParser = require('body-parser');
const app = express();
const multiparty = require('multiparty');
const db = require('./postgres/db.js');

// engine settings
app.engine('.hbs', engine({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    section: function (name, options) {
      if (!this._sections) this._sections = {}
      this._sections[name] = options.fn(this)
      return null
    },
  },
}));

// engine
app.set('view engine', '.hbs');
app.set('views', './views');

const port = process.env.PORT || 3000

//declare middleware used
const weatherMiddlware = require('./lib/middleware/weather')

// use middleware
app.use(weatherMiddlware)
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// Express -- Order in which routes and middleware are added is significant
app.get('/newsletter', handlers.newsletter)
app.get('/', handlers.home)
app.get('/about', handlers.about)
app.get('/foo', handlers.foo)
app.get('/tours', handlers.tours)
app.get('/vacations', async (req: Request, res: Response) => {
  try {
    const result = await db.getVacations();
    res.send({result: result})
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
})

app.get('/contest/vacation-photo', handlers.vacationPhotoContest)

app.post('/api/newsletter-signup', handlers.api.newsletterSignup)

app.post('/contest/vacation-photo/:year/:month', (req, res) => {
  const form = new multiparty.Form()
  form.parse(req, (err, fields, files) => {
    if(err) return handlers.vacationPhotoContestProcessError(req, res, err.message)
    console.log('got fields: ', fields)
    console.log('and files: ', files)
    handlers.vacationPhotoContestProcess(req, res, fields, files)
  })
})

app.use(handlers.notFound);
app.use(handlers.serverError)

// PostgreSQL Connection
// const { Client } = require('pg')
// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'node_vail',
//   password: '',
//   port: 5432,
// })
// client.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });
// PostgreSQL Connection


if (require.main === module) {
  app.listen(port, () => console.log(
    `Express started on http://localhost:${port}` + ` press Ctrl-C to terminate`
  ))
} else {
  module.exports = app;
}
