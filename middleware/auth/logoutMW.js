/**
 * Close current session and redirect to /
 */

const requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        req.session.destroy(err => {
            return res.redirect('/');
        });
    };
};