var expect = require('chai').expect;
var getTehenMW = require('../../../middleware/tehen/getTehenMW');

describe('getTehenMW', () => {
    it('should set res.locals.tehen with a tehen object from db', (done) => {
        const mw = getTehenMW({
            TehenModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '13'});
                    cb(null, 'mocktehen');
                }
            }
        });
        const resMock = {
            locals: {}
        };

        mw(
            {
                params: {
                    tehenid: '13'
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({ tehen: 'mocktehen' });
                done();
            }
        );
    });
    it('should call next with error when there is a db problem', (done) => {
        const mw = getTehenMW({
            TehenModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '13'});
                    cb('adatbazishiba', null);
                }
            }
        });
        const resMock = {
            locals: {}
        };

        mw(
            {
                params: {
                    tehenid: '13'
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql('adatbazishiba');
                done();
            }
        );
    });
    it('should call next when no tehen found in db', (done) => {
        const mw = getTehenMW({
            TehenModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '13'});
                    cb(undefined, null);
                }
            }
        });
        const resMock = {
            locals: {}
        };

        mw(
            {
                params: {
                    tehenid: '13'
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({});
                done();
            }
        );
    });
});