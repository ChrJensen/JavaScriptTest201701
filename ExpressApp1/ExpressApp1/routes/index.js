
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};

exports.fodbold = function (req, res) {
    res.render('fodbold', { title: 'Fodbold', year: new Date().getFullYear(), message: 'All about football' });
}

exports.heste = function (req, res) {
    res.render('heste', { title: 'Heste', year: new Date().getFullYear(), message: 'Using html markup with bootstrap' });
}

exports.grise = function (req, res) {
    res.render('grise', { title: 'Grise', year: new Date().getFullYear(), message: 'Using html markup with css' });
}

exports.movies = function (req, res) {
    res.render('movies', { title: 'Movies', year: new Date().getFullYear(), message: 'All about Movies' });
}

exports.people = function (req, res) {
    res.render('people', { title: 'People', year: new Date().getFullYear(), message: 'Random People' });
}