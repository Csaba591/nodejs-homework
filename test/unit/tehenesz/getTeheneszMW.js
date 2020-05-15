var expect = require('chai').expect;
var getTeheneszMW = require('../../../middleware/tehenesz/getTeheneszMW');

describe('getTeheneszMW', () => {
    it('should set res.locals.tehenesz with a tehenesz object from db', (done) => {
        const mw = getTeheneszMW({
            TeheneszModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '5'});
                    cb(null, 'mocktehenesz');
                }
            }
        });
        const resMock = {
            locals: {}
        };

        mw(
            {
                params: {
                    teheneszid: '5'
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({ tehenesz: 'mocktehenesz' });
                done();
            }
        );
    });
    it('should call next with error when there is a db problem', (done) => {
        const mw = getTeheneszMW({
            TeheneszModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '5'});
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
                    teheneszid: '5'
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql('adatbazishiba');
                done();
            }
        );
    });
    it('should call next when no tehenesz found in db', (done) => {
        const mw = getTeheneszMW({
            TeheneszModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '5'});
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
                    teheneszid: '5'
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