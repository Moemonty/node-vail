"use strict";
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { engine } = require('express-handlebars');
const handlers = require('./lib/handlers');
app.engine('handlebars', engine({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
// Express -- Order in which routes and middleware are added is significant
app.get('/', handlers.home);
app.get('/about', handlers.about);
app.use(handlers.notFound);
app.use(handlers.serverError);
if (require.main === module) {
    app.listen(port, () => console.log(`Express started on http://localhost:${port}` + ` press Ctrl-C to terminate`));
}
else {
    module.exports = app;
}
