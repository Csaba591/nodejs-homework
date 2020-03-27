/**
 * Deletes a tehen from the db
 * The entity used is: res.locals.tehen
 * Redirects to /tehen/:teheneszid
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};
