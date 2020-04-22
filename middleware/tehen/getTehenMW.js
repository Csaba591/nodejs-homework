/**
 * Load a tehen from the db using the :tehenid param
 * Store it in res.locals.tehen
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    
    const TehenModel = requireOption(objectrepository, 'TehenModel');

    return function (req, res, next) {
        TehenModel.findOne({_id: req.params.tehenid},
            (err, tehen) => {
                if(err || !tehen) {
                    return next(err);
                }
                res.locals.tehen = tehen;
                return next();
        });
    };
};
