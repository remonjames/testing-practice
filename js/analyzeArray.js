const analyzeArray = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  let avg = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  let min = arr.reduce((acc, cur) => (acc < cur ? acc : cur));
  let max = arr.reduce((acc, cur) => (acc > cur ? acc : cur));
  let length = arr.length;

  return {
    avg: avg,
    min: min,
    max: max,
    length: length,
  };
};

export default analyzeArray;
