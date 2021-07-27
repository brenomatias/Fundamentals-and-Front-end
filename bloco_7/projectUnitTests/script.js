const average = (array) => {
    if (array.length === 0) {
      return undefined;
    } 
    let sum = 0;
    for (let index = 0; index < array.length; index += 1) { 
      if (typeof array[index] !== 'number') {
        return undefined;
      }
        sum += array[index];
    }
    let averageResult = sum / array.length;
    averageResult = Math.round(averageResult); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
    return averageResult;
  };
        
module.exports = average;

console.log(average([2,2]));