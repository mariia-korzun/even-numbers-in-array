const evenNumbersInArray = (array) => {
    if (!Array.isArray(array) || array.length === 0) {
        return 'Passed argument is not an array or empty'
    }
    let divisor = 2
    let newArray = array.filter(element => element % divisor === 0)
    if (newArray.length === 0) {
        return 'Passed array does not contain even numbers'
    }
    return newArray
};

module.exports = evenNumbersInArray;

