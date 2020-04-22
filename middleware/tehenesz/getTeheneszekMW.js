/**
 * Load all tehenesz from the db
 * Store it in res.locals.teheneszek
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    
    const TeheneszModel = requireOption(objectrepository, 'TeheneszModel');

    return function (req, res, next) {
        TeheneszModel.find({}, (err, teheneszek) => {
            if(err) {
                return next(err);
            }
            res.locals.teheneszek = teheneszek;
            return next();
        });
    };
};
