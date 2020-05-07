const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Tehenesz = db.model('Tehenesz', {
    nev: {type: String, required: true },
    tel: { type: String, unique: true, required: true, dropDups: true }
});

module.exports = Tehenesz;