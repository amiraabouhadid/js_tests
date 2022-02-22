const stringLength = (string) => {
  if (string.length > 10 || string.length < 1) {
    throw new Error();
  } else {
    return string.length;
  }
};
module.exports = stringLength;
