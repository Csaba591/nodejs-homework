/**
 * Deletes a tehenesz from the db
 * The entity used is: res.locals.tehenesz
 * Redirects to /tehenesz
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
