const authMW = require('../middleware/auth/authMW');
const checkPwMW = require('../middleware/auth/checkPwMW');
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

module.exports = function (app) {
    const objRepo = {};

    app.use('/',
        getTopTeheneszekMW(objRepo),
        checkPwMW(objRepo),
        renderMW(objRepo, 'index'));

    app.get('/tehenesz',
        authMW(objRepo),
        getTeheneszekMW(objRepo),
        renderMW(objRepo, 'teheneszlista'));
    app.use('/tehenesz/new',
        authMW(objRepo),
        saveTeheneszMW(objRepo),
        renderMW(objRepo, 'teheneszeditnew'));
    app.use('/tehenesz/edit/:teheneszid',
        authMW(objRepo),
        getTeheneszMW(objRepo),
        saveTeheneszMW(objRepo),
        renderMW(objRepo, 'teheneszeditnew'));
    app.get('/tehenesz/del/:teheneszid',
        authMW(objRepo),
        getTeheneszMW(objRepo),
        delTeheneszMW(objRepo));

    app.get('/tehen/:teheneszid',
        authMW(objRepo),
        getTeheneszMW(objRepo),
        getTeheneszekMW(objRepo),
        renderMW(objRepo, 'egytehenesztehenei'));
    app.use('/tehen/:teheneszid/new',
        authMW(objRepo),
        getTeheneszMW(objRepo),
        saveTehenMW(objRepo),
        renderMW(objRepo, 'teheneditnew'));
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
};
