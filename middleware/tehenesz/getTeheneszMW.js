/**
 * Load a tehenesz from the db using the :teheneszid param
 * Store it in res.locals.tehenesz
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
