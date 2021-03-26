import { strict as assert } from 'assert';
import capitalize from '../src/capitalize.js';

assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize(''), '');

console.log('Тесты прошли!');
