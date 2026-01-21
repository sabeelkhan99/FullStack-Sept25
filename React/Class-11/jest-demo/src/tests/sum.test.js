const sum = require('../features/sum');

test('1 and 2 should sum to 3 ', () => {
    expect(sum(1, 2)).toBe(3);
});

test('3 and 4 should be 7', () => {
    expect(sum(3, 4)).toBe(7);
});