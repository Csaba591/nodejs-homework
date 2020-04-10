/**
 * Load the tehenesz list and tehen.tej sum from the db
 * Store it in res.locals.topteheneszek
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.topteheneszek = [
            {
                _id: 1,
                nev: 'Jani',
                tej: 6,
                helyezes: 1
            },
            {
                _id: 2,
                nev: 'Feri',
                tej: 4.5,
                helyezes: 2
            },
            {
                _id: 3,
                nev: 'Gábor',
                tej: 1,
                helyezes: 3
            }
        ]
        next();
    };
};
