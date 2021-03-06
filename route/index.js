const authMW = require('../middleware/auth/authMW');
const checkPwMW = require('../middleware/auth/checkPwMW');
const logoutMW = require('../middleware/auth/logoutMW');
const delTehenMW = require('../middleware/tehen/delTehenMW');
const getTehenekMW = require('../middleware/tehen/getTehenekMW');
const getTehenMW = require('../middleware/tehen/getTehenMW');
const saveTehenMW = require('../middleware/tehen/saveTehenMW');
const delTeheneszMW = require('../middleware/tehenesz/delTeheneszMW');
const getTeheneszekMW = require('../middleware/tehenesz/getTeheneszekMW');
const getTeheneszMW = require('../middleware/tehenesz/getTeheneszMW');
const getTopTeheneszekMW = require('../middleware/tehenesz/getTopTeheneszekMW');
const saveTeheneszMW = require('../middleware/tehenesz/saveTeheneszMW');
const renderMW = require('../middleware/renderMW');

const TeheneszModel = require('../models/tehenesz');
const TehenModel = require('../models/tehen');

module.exports = function (app) {
    const objRepo = {
        TeheneszModel: TeheneszModel,
        TehenModel: TehenModel
    };

    app.get('/favicon.ico', (req, res) => res.status(204));
    
    app.use('/tehenesz/edit/:teheneszid',
        authMW(objRepo),
        getTeheneszMW(objRepo),
        saveTeheneszMW(objRepo),
        renderMW(objRepo, 'teheneszeditnew'));
    app.get('/tehenesz/del/:teheneszid',
        authMW(objRepo),
        getTeheneszMW(objRepo),
        delTeheneszMW(objRepo));
    app.use('/tehenesz/new',
        authMW(objRepo),
        saveTeheneszMW(objRepo),
        renderMW(objRepo, 'teheneszeditnew'));
    app.get('/tehenesz',
        authMW(objRepo),
        getTeheneszekMW(objRepo),
        renderMW(objRepo, 'teheneszlist'));
    
    app.use('/tehen/:teheneszid/edit/:tehenid',
        authMW(objRepo),
        getTeheneszMW(objRepo),
        getTehenMW(objRepo),
        saveTehenMW(objRepo),
        renderMW(objRepo, 'teheneditnew'));
    app.get('/tehen/:teheneszid/del/:tehenid',
        authMW(objRepo),
        getTeheneszMW(objRepo),
        getTehenMW(objRepo),
        delTehenMW(objRepo),
        renderMW(objRepo, 'teheneditnew'));
    app.use('/tehen/:teheneszid/new',
        authMW(objRepo),
        getTeheneszMW(objRepo),
        saveTehenMW(objRepo),
        renderMW(objRepo, 'teheneditnew'));
    app.get('/tehen/:teheneszid',
        getTeheneszMW(objRepo),
        getTehenekMW(objRepo),
        renderMW(objRepo, 'tehenlist'));  

    app.use('/logout', logoutMW(objRepo));
    
    app.use('/',
        checkPwMW(objRepo),
        getTopTeheneszekMW(objRepo),
        renderMW(objRepo, 'index'));
};
