const abNumbers = (a = null, b = null) => {
  if (isNaN(a) || isNaN(b) || typeof a !== 'number' || typeof b !== 'number') {
    return false;
  }
  return true;
};

export const add = (a = 0, b = 0) => {
  if (abNumbers(a, b)) return a + b;
  return 'Niepoprawne parametry';
};

export const subtract = (a = 0, b = 0) => {
  if (abNumbers(a, b)) return a - b;
  return 'Niepoprawne parametry';
};

export const multiply = (a = 1, b = 1) => {
  if (abNumbers(a, b)) return a * b;
  return 'Niepoprawne parametry';
};

export const divide = (a = 1, b = 1) => {
  if (abNumbers(a, b)) return a / b;
  return 'Niepoprawne parametry';
};
