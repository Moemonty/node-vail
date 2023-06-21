"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home = (req, res) => res.render('home');
exports.about = (req, res) => res.render('about');
exports.notFound = (req, res) => res.render('404');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
exports.serverError = (err, req, res, next) => res.render('500');
