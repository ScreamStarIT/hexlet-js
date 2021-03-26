export default (text) => {
  if (text === '') {
    return '';
  }
  const [firstChar, ...restSubstring] = text;
  return `${firstChar.toUpperCase()}${restSubstring.join('')}`;
};
