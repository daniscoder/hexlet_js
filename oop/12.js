// 12. Исключения
class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ParseError';
  }
}

export function parseJson(json) {
  try {
    return JSON.parse(json);
  } catch (error) {
    throw new ParseError(error);
  }
}

const json = '{ "key": "value" }';
parseJson(json); // { key: 'value' }

const incorrectJson = '{ key": "value" }';
parseJson(incorrectJson); // => ParseError: Invalid JSON string
