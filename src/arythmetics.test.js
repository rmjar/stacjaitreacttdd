import { add, subtract, multiply, divide } from './arythmetics';
import expect from 'expect';



// add ====================================
it('ahould add two numbers', () => {
  expect(add(2, 2)).toBe(4);
});

it('should add use default parameters', () => {
  expect(add(2)).toBe(2);
});

it('should add return an error if parameter is null', () => {
  expect(add(null)).toBe('Niepoprawne parametry');
});

it('should add return an error if parameter is empty string', () => {
  expect(add('')).toBe('Niepoprawne parametry');
});

it('should add return an error if parameter is array with numbers', () => {
  expect(add([2, 3])).toBe('Niepoprawne parametry');
});

it('should add return an error if parameter is object', () => {
  expect(add({})).toBe('Niepoprawne parametry');
});

it('should add return an error if parameter is NaN', () => {
  expect(add(NaN)).toBe('Niepoprawne parametry');
});

it('should add return an error if paraemeter is string', () => {
  expect(add('2')).toBe('Niepoprawne parametry');
});


// subtract ===================================
it('should subtract two numbers', () => {
  expect(subtract(2, 2)).toBe(0);
});

it('should subtract use default parameters', () => {
  expect(subtract(2)).toBe(2);
});

it('should subtract return an error if parameter is null', () => {
  expect(subtract(null)).toBe('Niepoprawne parametry');
});

it('should subtract return an error if parameter is empty string', () => {
  expect(subtract('')).toBe('Niepoprawne parametry');
});

it('should subtract return an error if parameter is array with numbers', () => {
  expect(subtract([2, 3])).toBe('Niepoprawne parametry');
});

it('should subtract return an error if parameter is object', () => {
  expect(subtract({})).toBe('Niepoprawne parametry');
});

it('should subtract return an error if parameter is NaN', () => {
  expect(subtract(NaN)).toBe('Niepoprawne parametry');
});

it('should subtract return an error if paraemeter is string', () => {
  expect(subtract('2')).toBe('Niepoprawne parametry');
});


// multiply ===================================
it('should multiply two numbers', () => {
  expect(multiply(2, 2)).toBe(4);
});

it('should multiply use default parameters', () => {
  expect(multiply(2)).toBe(2);
});

it('should multiply return an error if parameter is null', () => {
  expect(multiply(null)).toBe('Niepoprawne parametry');
});

it('should multiply return an error if parameter is empty string', () => {
  expect(multiply('')).toBe('Niepoprawne parametry');
});

it('should multiply return an error if parameter is array with numbers', () => {
  expect(multiply([2, 3])).toBe('Niepoprawne parametry');
});

it('should multiply return an error if parameter is object', () => {
  expect(multiply({})).toBe('Niepoprawne parametry');
});

it('should multiply return an error if parameter is NaN', () => {
  expect(multiply(NaN)).toBe('Niepoprawne parametry');
});

it('should multiply return an error if paraemeter is string', () => {
  expect(multiply('2')).toBe('Niepoprawne parametry');
});



// divide ==========================================
it('should divide two numbers', () => {
  expect(divide(2, 2)).toBe(1);
});

it('should divide use default parameters', () => {
  expect(divide(2)).toBe(2);
});

it('should divide return an error if parameter is null', () => {
  expect(divide(null)).toBe('Niepoprawne parametry');
});

it('should divide return an error if parameter is empty string', () => {
  expect(divide('')).toBe('Niepoprawne parametry');
});

it('should divide return an error if parameter is array with numbers', () => {
  expect(divide([2, 3])).toBe('Niepoprawne parametry');
});

it('should divide return an error if parameter is object', () => {
  expect(divide({})).toBe('Niepoprawne parametry');
});

it('should divide return an error if parameter is NaN', () => {
  expect(divide(NaN)).toBe('Niepoprawne parametry');
});

it('should divide return an error if paraemeter is string', () => {
  expect(divide('2')).toBe('Niepoprawne parametry');
});
