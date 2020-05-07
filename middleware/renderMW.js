/**
 * Render the viewName view into the template
 */

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        res.locals.belepve = req.session.belepve;
        res.locals.errors = req.flash('errors');
        res.render(viewName, res.locals);
    };
};
