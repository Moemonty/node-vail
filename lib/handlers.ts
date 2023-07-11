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
exports.tours = (req: Request, res: Response) => res.render('pages/tours', toursContext)


exports.notFound = (req: Request, res: Response) => res.render('404')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.serverError = (err: unknown, req: Request, res: Response, next: NextFunction) => res.render('500')
