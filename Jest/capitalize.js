function capitalize(string) {
  let firstLetter = string[0].toUpperCase() + string.slice(1);
  return firstLetter;
}
module.exports = capitalize;
