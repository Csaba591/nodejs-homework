/**
 * Load a tehenesz from the db using the :teheneszid param
 * Store it in res.locals.tehenesz
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.tehenesz = {
            _id: 1,
            nev: 'Jani',
            tehenek: [
                {
                    _id: 1,
                    nev: 'Boci',
                    szin: 'fekete-fehér',
                    kor: 6,
                    tej: 3,
                    kozerzet: 'fáradt'
                },
                {
                    _id: 2,
                    nev: 'Miska',
                    szin: 'lila',
                    kor: 4,
                    tej: 1,
                    kozerzet: 'szomorú'
                },
                {
                    _id: 3,
                    nev: 'Teri',
                    szin: 'barna',
                    kor: 4,
                    tej: 1.5,
                    kozerzet: 'üde'
                }
            ]
        }
        next();
    };
};
