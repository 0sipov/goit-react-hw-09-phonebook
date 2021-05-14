function isEmptyString() {
  return [...arguments].some(str => str === '');
}
const isPassValid = string => string.length >= 7;

export default { isEmptyString, isPassValid };
