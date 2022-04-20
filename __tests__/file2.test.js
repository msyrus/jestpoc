const { subtract, division } = require('../file2');
const { sum } = require('../file1');

test('subtracts 1 - 2 to equal -1', () => {
    expect(subtract(1, 2)).toBe(-1);
});


test('division 1 / 2 to equal 0.5', () => {
    expect(division(1, 2)).toBe(0.5);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
