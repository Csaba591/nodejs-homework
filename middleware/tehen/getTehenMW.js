/**
 * Load a tehen from the db using the :tehenid param
 * Store it in res.locals.tehen
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.tehen = {
            nev: 'Boci',
            szin: 'fekete-fehér',
            kor: 6,
            tej: 3,
            kozerzet: 'fáradt'
        }
        next();
    };
};
