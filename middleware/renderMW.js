/**
 * Render the viewName view into the template
 */

const requireOption = require('./requireOption');

module.exports = function (objectrepository, viewName) {
    return function (req, res) {
        console.log('render: ' + viewName);
        res.render(viewName);
    };
};
