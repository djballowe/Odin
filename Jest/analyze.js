function analyze(arr) {
  class AnalyzArray {
    constructor(average, min, max, long) {
      this.average = average;
      this.min = min;
      this.max = max;
      this.length = long;
    }
  }
  let length = arr.length;
  let max = arr[0];
  let min = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    sum += arr[i];
  }
  let average = sum / length;
  return new AnalyzArray(average, min, max, length);
}

module.exports = analyze;
