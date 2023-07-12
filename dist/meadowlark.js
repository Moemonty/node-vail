"use strict";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require('express');
const { engine } = require('express-handlebars');
const handlers = require('./lib/handlers');
const weatherMiddlware = require('./lib/middleware/weather');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.use(weatherMiddlware);
// eslint-disable-next-line @typescript-eslint/no-var-requires
// eslint-disable-next-line @typescript-eslint/no-var-requires
app.engine('handlebars', engine({
    defaultLayout: 'main',
    // helpers: {
    //   section: function(name: any, options: any) {
    //     if(!this._sections) this._sections = {}
    //     this._sections[name] = options.fn(this)
    //     return null
    //   },
    // }
}));
app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'));
// Express -- Order in which routes and middleware are added is significant
app.get('/', handlers.home);
app.get('/about', handlers.about);
// app.get('/foo', (req: Request, res: Response) => res.render('foo', {layout: null}))
app.get('/tours', handlers.tours);
app.use(handlers.notFound);
app.use(handlers.serverError);
if (require.main === module) {
    app.listen(port, () => console.log(`Express started on http://localhost:${port}` + ` press Ctrl-C to terminate`));
}
else {
    module.exports = app;
}
