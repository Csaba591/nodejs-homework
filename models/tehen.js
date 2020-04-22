const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Tehenesz = db.model('Tehen', {
    nev: String,
    szin: String,
    kor: Number,
    tej: Number,
    kozerzet: String,
    _tulaj: {
        type: Schema.Types.ObjectId,
        ref: 'Tehenesz'
    }
});

module.exports = Tehenesz;