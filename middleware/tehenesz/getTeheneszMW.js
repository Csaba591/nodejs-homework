/**
 * Load a tehenesz from the db using the :teheneszid param
 * Store it in res.locals.tehenesz
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    
    const TeheneszModel = requireOption(objectrepository, 'TeheneszModel');
   
    return function (req, res, next) {
        TeheneszModel.findOne({_id: req.params.teheneszid},
            (err, tehenesz) => {
                if(err || !tehenesz) {
                    return next(err);
                }
                res.locals.tehenesz = tehenesz;
                return next();
            });
    };
};
