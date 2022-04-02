let a = 0

beforeEach(() => {
    a += 2
})

afterEach(() => {
    a = 0
})

test('should expect a + 2 to be 4', () => {
    a += 2
    expect(a).toBe(4)
});

test('should expect a + 2 to be 4', () => {
    a += 2
    expect(a).toBe(4)
});

/**
 * beforeEach and afterEach can work with async function
 * as the same way with test functions
 */


/**
 * We can configure all with beforeAll and afterAll
 */

/**
 * we can group many test with describe and 
 * before and after functions has their scope
 * only in describe
 */

describe('test sum', () => {
    let data = []
    beforeAll(() => {
        data.push(1)
        data.push(2)
        data.push(3)
    })

    afterAll(() => {
        data = []
    })

    test('all element should sum 5', () => {
        console.log('...');
        expect(data.reduce((a, b) => a + b)).toBe(6)
    });
});