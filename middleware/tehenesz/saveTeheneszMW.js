/**
 * Create new or update existing tehenesz in the db using data from POST
 * On success -> redirect to /tehenesz
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const TeheneszModel = requireOption(objectrepository, 'TeheneszModel');

    return function (req, res, next) {
        if ((typeof req.body.nev === 'undefined') ||
            (typeof req.body.tel === 'undefined')) {
            return next();
        }

        if(typeof res.locals.tehenesz === 'undefined') {
            res.locals.tehenesz = new TeheneszModel();
        }

        res.locals.tehenesz.nev = req.body.nev;
        res.locals.tehenesz.tel = req.body.tel;

        res.locals.tehenesz.save((err) => {
            if(err) {
                console.log('HIBAAAA');
                return next(err);
            }
            return res.redirect('/tehenesz');
        })
    };
};
