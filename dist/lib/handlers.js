"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aboutContext = {
    name: 'Meadowlark',
    date: new Date(),
};
const toursContext = {
    currency: {
        name: "US",
        abbrev: "USD",
    },
    tours: [
        { name: "Hood River", price: "99.95" },
        { name: "Oregon Coast", price: "199.95" }
    ],
    specialsUrl: "/january-specials",
    currencies: ['USD', 'GBP', 'BTC']
};
exports.home = (req, res) => res.render('pages/home');
exports.about = (req, res) => res.render('pages/about', aboutContext);
exports.tours = (req, res) => res.render('pages/tours', toursContext);
exports.foo = (req, res) => res.render('foo', { layout: null });
exports.notFound = (req, res) => res.render('404');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.serverError = (err, req, res, next) => res.render('500');
