/**
 * Deletes a tehenesz from the db
 * The entity used is: res.locals.tehenesz
 * Redirects to /tehenesz
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.tehenesz === 'undefined') {
            return next();
        }

        res.locals.tehenesz.remove(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/tehenesz');
        });
    };
};
