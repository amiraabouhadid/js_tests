const capitalizeString = (inputString) => {
  if (typeof inputString !== "string") {
    throw new Error();
  } else {
    return inputString
      .split(" ")
      .map((word) => word.replace(/^\w/, (letter) => letter.toUpperCase()))
      .join(" ");
  }
};
module.exports = capitalizeString;
