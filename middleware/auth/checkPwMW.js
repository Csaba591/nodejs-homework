/**
 * Check password sent in POST:
 * it matches -> redirect to /tehenesz
 * else       -> redirect to / with error notification
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if(req.body.password === 'szojatej') {
            return res.redirect('/tehenesz');
        }
        next();
    };
};
