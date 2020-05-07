/**
 * Load the tehenesz list and tehen.tej sum from the db
 * Store it in res.locals.topteheneszek
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const TehenModel = requireOption(objectrepository, 'TehenModel');
    return function (req, res, next) {
        TehenModel.aggregate(
            [
                {
                    $group: {
                        _id: '$_tulaj',
                        sum: {
                            $sum: '$tej'
                        }
                    }
                },
                {
                    $lookup: {
                        from: 'teheneszs',
                        localField: '_id',
                        foreignField: '_id',
                        as: 'tulaj'
                    }
                },
                {
                    $sort: {
                        sum: -1
                    }
                },
                {
                    $limit: 5
                },
                { $unwind: { path: '$tulaj' } }
            ],
            (err, result) => {
                if (err) {
                    return next(err);
                }
                res.locals.topteheneszek = result.map(e => {
                    return { nev: e.tulaj.nev, tej: e.sum, _id: e._id };
                });
                return next();
            }    
        )
    };
};
