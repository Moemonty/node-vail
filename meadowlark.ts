const express = require('express');
const { engine } = require ('express-handlebars');
const handlers = require('./lib/handlers')
const bodyParser = require('body-parser');

const app = express();

// engine settings
app.engine('.hbs', engine({
  defaultLayout: 'main',
  extname: '.hbs',
  helpers: {
    section: function(name, options) {
      if(!this._sections) this._sections = {}
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
app.use(bodyParser.urlencoded({ extended: true }));

// Express -- Order in which routes and middleware are added is significant
app.get('/newsletter', handlers.newsletter)
app.get('/', handlers.home)
app.get('/about', handlers.about)
app.get('/foo', handlers.foo)
app.get('/tours', handlers.tours)

app.post('/api/newsletter-signup', handlers.api.newsletterSignup)

app.use(handlers.notFound);
app.use(handlers.serverError)

if(require.main === module) {
  app.listen(port, () => console.log(
    `Express started on http://localhost:${port}` + ` press Ctrl-C to terminate`
  ))
} else {
  module.exports = app;
}
