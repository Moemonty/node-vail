const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const { engine } = require ('express-handlebars');

app.engine('handlebars', engine({
    defaultLayout: 'main',
}));

app.set('view engine', 'handlebars');
// app.set("views", "./views");

// Express -- Order in which routes and middleware are added is significant

app.get('/', (req, res) => res.render('home'))

// app.get('/', (req, res) => {
//     res.render('home');
// });

// app.get('/', (req, res) => {
//     res.type('text/plain')
//     res.send('Meadowlark Travel')
// })

// app.get('/about', (req, res) => {
//     res.type('text/plain')
//     res.send('About Meadowlark Travel')
// })

// Handlebars version
app.get('/about', (req, res) => res.render('about'))

app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found')
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error')
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}` + ` press Ctrl-C to terminate`
))
