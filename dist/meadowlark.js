"use strict";
const express = require('express');
const { engine } = require('express-handlebars');
const handlers = require('./lib/handlers');
const app = express();
app.engine('.hbs', engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', './views');
//declare middleware used
const weatherMiddlware = require('./lib/middleware/weather');
const port = process.env.PORT || 3000;
// use middleware
app.use(weatherMiddlware);
// Express -- Order in which routes and middleware are added is significant
app.get('/', handlers.home);
app.get('/about', handlers.about);
app.get('/contact', handlers.contact);
app.get('/foo', handlers.foo);
app.get('/tours', handlers.tours);
app.use(handlers.notFound);
app.use(handlers.serverError);
if (require.main === module) {
    app.listen(port, () => console.log(`Express started on http://localhost:${port}` + ` press Ctrl-C to terminate`));
}
else {
    module.exports = app;
}
