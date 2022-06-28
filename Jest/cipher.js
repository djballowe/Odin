function cipher(string) {
  let split = string.split('');
  let num = split.map((x) => String.fromCharCode(x.charCodeAt(0) + 1)).join('');
  return num;
}

console.log(cipher('test'));
