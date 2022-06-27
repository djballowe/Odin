function reverse(string) {
  let stringSplit = string.split('');
  let reverse = stringSplit.reverse().join('');
  return reverse;
}
module.exports = reverse;
