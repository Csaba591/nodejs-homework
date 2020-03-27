/**
 * Load a tehen from the db using the :tehenid param
 * Store it in res.locals.tehen
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
