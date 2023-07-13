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
// exports.contact = (req: Request, res: Response) => res.render('pages/contact')
exports.tours = (req, res) => res.render('pages/tours', toursContext);
exports.foo = (req, res) => res.render('foo', { layout: null });
exports.newsletterSignup = (req, res) => {
    res.render('pages/contact', { csrf: 'CSRF Token goes here' });
};
exports.newsletterSignupProcess = (req, res) => {
    console.log(req.body);
    console.log('Form (from querystring): ' + req.query.form);
    console.log('CSRF token (from hidden form field): ' + req.body._csrf);
    console.log('Name (from visible form field): ' + req.body.name);
    console.log('Email (from visible form field): ' + req.body.email);
    res.redirect(303, '/newsletter-signup/thank-you');
};
exports.newsletterSignupThankYou = (req, res) => {
    res.render('newsletter-signup-thank-you');
};
exports.notFound = (req, res) => res.render('404');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.serverError = (err, req, res, next) => res.render('500');
