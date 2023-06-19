exports.home = (req: any, res: any) => res.render('home')
exports.about = (req: any, res: any) => res.render('about')
exports.notFound = (req: any, res: any) => res.render('404')
exports.serverError = (err: any, req: any, res: any, next: any) => res.render('500')
