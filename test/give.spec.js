const give = require('../src/give');

describe('Give function', () => {
    it('should return 1', () => {
        expect(give(1)).to.equal(1);
    });

    it('should return 2', () => {
        expect(give(2)).to.equal(2);
    });
});
