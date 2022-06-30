function cipher(string) {
  let puncArr = ['.', ',', '/', '?', '!', '(', ')', '{', '}', '[', ']', ' '];
  let split = string.split('');
  for (let i = 0; i < string.length; i++) {
    if (split[i].indexOf(puncArr) === -1) {
      let num = split
        .map((x) => String.fromCharCode(x.charCodeAt(0) + 1))
        .join('');
      return num;
    }
  }
}
console.log(cipher('David, Ballowe!'));
module.exports = cipher;
