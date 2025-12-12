'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styles = {};

  const lines = sourceString
    .split(';')
    .filter((line) => line.trim().length > 0);

  lines.forEach((line) => {
    const [key, value] = line.split(':');

    styles[key.trim()] = value.trim();
  });

  return styles;
}

module.exports = convertToObject;
