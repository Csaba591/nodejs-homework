/**
 * Load all tehenesz from the db
 * Store it in res.locals.teheneszek
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.teheneszek = [
            {
                nev: 'Jani',
                tej: 6,
                tehenek: {}
            },
            {
                nev: 'Feri',
                tej: 4.5,
                tehenek: {}
            },
            {
                nev: 'Gábor',
                tej: 1,
                tehenek: {}
            }
        ]
        next();
    };
};
