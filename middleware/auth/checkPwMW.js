/**
 * Check password sent in POST:
 * it matches -> redirect to /tehenesz
 * else       -> redirect to / with error notification
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(typeof req.body.password === 'undefined')
            return next();

        if(req.body.password === 'szojatej') {
            req.session.belepve = true;
            return res.redirect('/tehenesz');
        }
        req.flash('errors', 'Hibás jelszó!');
        next();
    };
};
