const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Tehenesz = db.model('Tehenesz', {
    nev: String,
    tel: String
});

module.exports = Tehenesz;