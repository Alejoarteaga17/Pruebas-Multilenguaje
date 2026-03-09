
const { isPalindrome } = require('../src/stringUtils');


test('debería retornar true para "radar"', () => {
  expect(isPalindrome('radar')).toBe(true);
});

test('debería retornar true para "anita lava la tina"', () => {
  expect(isPalindrome('anita lava la tina')).toBe(true);
});

test('debería retornar false para "python"', () => {
  expect(isPalindrome('python')).toBe(false);
});

test('debería retornar true para string vacío', () => {
  expect(isPalindrome('')).toBe(true);
});

test('debería retornar true para "Radar" (ignorando mayúsculas)', () => {
  expect(isPalindrome('Radar')).toBe(true);
});



