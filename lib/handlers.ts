import { Request, Response, NextFunction } from 'express';

exports.home = (req: Request, res: Response) => res.render('home')
exports.about = (req: Request, res: Response) => res.render('about')
exports.notFound = (req: Request, res: Response) => res.render('404')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.serverError = (err: unknown, req: Request, res: Response, next: NextFunction) => res.render('500')