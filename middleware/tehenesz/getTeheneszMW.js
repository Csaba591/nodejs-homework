/**
 * Load a tehenesz from the db using the :teheneszid param
 * Store it in res.locals.tehenesz
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    
    const TeheneszModel = requireOption(objectrepository, 'TeheneszModel');
    const TehenModel = requireOption(objectrepository, 'TehenModel');

    return function (req, res, next) {
        TeheneszModel.findOne({_id: req.params.teheneszid},
            (err, tehenesz) => {
                if(err || !tehenesz) {
                    return next(err);
                }
                res.locals.tehenesz = tehenesz;
            });
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
