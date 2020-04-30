const twinNumbersInArray = require('../src/twin-array-numbers');

describe('twinArrayNumbers function', () => {
  it('should return "Passed argument is not a array" when type of passed argumnent is not an "array"', () => {
    expect(twinNumbersInArray(true)).to.equal('Passed argument is not an array or empty');
  });
  it('should return "Passed argument is not a array" when type of passed argumnent is not an "array"', () => {
    expect(twinNumbersInArray(1)).to.equal('Passed argument is not an array or empty');
  });
  it('should return "Passed argument is not a array" when type of passed argumnent is not an "array"', () => {
    expect(twinNumbersInArray([])).to.equal('Passed argument is not an array or empty');
  });
  it('should return "Passed array not have twin numbers in array" when given array not have twin numbers', () => {
    expect(twinNumbersInArray([1, 3, 5])).to.equal('Passed array not have twin numbers in array');
  });
  it('should return "Passed array not have twin numbers in array" when given array not have twin numbers', () => {
    expect(twinNumbersInArray([27, 33, 47, 67])).to.equal('Passed array not have twin numbers in array');
  });
  it('should return "Passed array not have twin numbers in array" when given array not have twin numbers', () => {
    expect(twinNumbersInArray([5])).to.equal('Passed array not have twin numbers in array');
  });
  it('should return twin numbers [2,4,6] from array', () => {
    expect(twinNumbersInArray([1,2,3,4,5,6])).to.eql([2,4,6]);
  });
  it('should return twin numbers [2,4,6] from array', () => {
    expect(twinNumbersInArray([1,2,3,4,5,6])).to.eql([2,4,6]);
  });
  it('should return twin numbers [6] from array', () => {
    expect(twinNumbersInArray([6])).to.eql([6]);
  });
  it('should return twin numbers [56] from array', () => {
    expect(twinNumbersInArray([55,27,33,11,31,56])).to.eql([56]);
  });
});

