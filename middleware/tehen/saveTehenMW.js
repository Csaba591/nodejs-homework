/**
 * Create new or update existing tehen in the db using data from POST
 * On success -> redirect to /tehen/:teheneszid
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {

    const TehenModel = requireOption(objectrepository, 'TehenModel');

    return function (req, res, next) {
        if ((typeof req.body.nev === 'undefined') ||
            (typeof req.body.szin === 'undefined') || 
            (typeof req.body.kozerzet === 'undefined') ||
            (typeof req.body.tej === 'undefined') ||
            (typeof req.body.kor === 'undefined') ||
            (typeof res.locals.tehenesz === 'undefined')) {
            return next();
        }

        if(typeof res.locals.tehen === 'undefined') {
            res.locals.tehen = new TehenModel();
        }

        res.locals.tehen.nev = req.body.nev;
        res.locals.tehen.szin = req.body.szin;
        res.locals.tehen.kor = req.body.kor;
        res.locals.tehen.tej = req.body.tej;
        res.locals.tehen.kozerzet = req.body.kozerzet;
        res.locals.tehen._tulaj = res.locals.tehenesz._id;

        //console.log(res.locals.tehen);
        res.locals.tehen.save((err) => {
            if(err) {
                console.log('HIBAAAA');

                return next(err);
            }
            //console.log(res.locals.tehenesz._id + '---');
            return res.redirect('/tehen/' + res.locals.tehenesz._id);
        })
    };
};
