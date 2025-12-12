'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const lines = sourceString
    .split(';')
    .filter((line) => line.trim().length > 0);

  lines.forEach((line) => {
    const [key, value] = line.split(':');

    result[key.trim()] = value.trim();
  });

  return result;
}

module.exports = convertToObject;
