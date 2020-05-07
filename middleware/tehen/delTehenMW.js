/**
 * Deletes a tehen from the db
 * The entity used is: res.locals.tehen
 * Redirects to /tehen/:teheneszid
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function(req, res, next) {
        if (typeof res.locals.tehen === 'undefined') {
            return next();
        }

        res.locals.tehen.remove(err => {
            if (err) {
                return next(err);
            }
            return res.redirect(`/tehen/${res.locals.tehenesz._id}`);
        });
    };
};
