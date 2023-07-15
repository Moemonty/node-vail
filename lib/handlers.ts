import { Request, Response, NextFunction } from 'express';

const aboutContext = {
  name: 'Meadowlark',
  date: new Date(),
}

const toursContext = {
  currency: {
    name: "US",
    abbrev: "USD",
  },
  tours: [
    { name: "Hood River", price: "99.95"},
    { name: "Oregon Coast", price: "199.95"}
  ],
  specialsUrl: "/january-specials",
  currencies: ['USD', 'GBP', 'BTC']
}

exports.home = (req: Request, res: Response) => res.render('pages/home')
exports.about = (req: Request, res: Response) => res.render('pages/about', aboutContext)
// exports.contact = (req: Request, res: Response) => res.render('pages/contact')
exports.tours = (req: Request, res: Response) => res.render('pages/tours', toursContext)
exports.foo = (req: Request, res: Response) => res.render('foo', { layout: null })

exports.newsletter = (req, res) => {
  res.render('pages/newsletter', { csrf: 'CSRF token goes here'})
}


exports.api = {
  newsletterSignup: (req, res) => {
    console.log(req.body._csrf  );
    // Styles of interporlation -- pick ONE :) :| :(
    console.log('CSRF token field: ' + req.body._csrf);
    console.log(`Name:  ${req.body.name}`);
    console.log('Email: ', req.body.email);
    res.send({ result: 'success'})
  }
}

// OBJECT FOR API -- Other Style
// exports.api = {};
// exports.api.newsletterSignup = (req, res) => {
//   console.log('CSRF token (from hidden form field): ' + req.body._csrf)
//   console.log('Name (from visible form field): ' + req.body.name)
//   console.log('Email (from visible form field): ' + req.body.email)
//   res.send({ result: 'success' })
// }


exports.notFound = (req: Request, res: Response) => res.render('404')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.serverError = (err: unknown, req: Request, res: Response, next: NextFunction) => res.render('500')
