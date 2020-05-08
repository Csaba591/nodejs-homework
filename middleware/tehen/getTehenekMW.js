/**
 * Load all tehen from the db
 * Store it in res.locals.tehenek
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    
    const TehenModel = requireOption(objectrepository, 'TehenModel');

    return function (req, res, next) {
        TehenModel.find(
            {_tulaj: req.params.teheneszid},
            (err, tehenek) => {
                if(err || !tehenek) {
                    return next(err);
                }
                res.locals.tehenesz.tehenek = tehenek;

                return next();
        });
    };
};
