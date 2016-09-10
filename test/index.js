const lib = require('../src/index');
const should = require('chai').should();

describe('lib', () => {
    it('method_one should return "method_one"', (done) => {
        lib.method_one().should.be.equal('method_one');
        done();
    });

    it('method_two should return "method_two"', (done) => {
        lib.method_two().should.be.equal('method_two');
        done();
    });

    it('method_three should return "method_three"', (done) => {
        lib.method_three().should.be.equal('method_three');
        done();
    });

    it('method_four should return "method_four"', (done) => {
        lib.method_four().should.be.equal('method_four');
        done();
    });
});

