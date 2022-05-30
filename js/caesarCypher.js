const caesarCypher = (str, key) => {
  const upperKey = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerKey = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';

  if (key < 0 || key > 25) {
    return undefined;
  }

  return str
    .split('')
    .map((char) => {
      if (lowerKey.includes(char)) {
        return lowerKey[lowerKey.indexOf(char) + key];
      } else if (upperKey.includes(char)) {
        return upperKey[upperKey.indexOf(char) + key];
      } else {
        return char;
      }
    })
    .join('');
};

export default caesarCypher;
