test('object assignment', () => {
    const data = { one: 1 }
    data['two'] = 2
    expect(data).toEqual({ one: 1, two: 2 })
});

test('null', () => {
    const n = null
    expect(n).toBeNull()
    expect(n).toBeDefined()
    expect(n).not.toBeUndefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
});

test('zero', () => {
    const z = 0
    expect(z).not.toBeNull()
    expect(z).toBeDefined()
    expect(z).not.toBeUndefined()
    expect(z).not.toBeTruthy()
    expect(z).toBeFalsy()
});

test('numbers', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3)
    expect(value).toBeGreaterThanOrEqual(3.5)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(5)

    expect(value).toBe(4)
    expect(value).toEqual(4)
});

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2
    // expect(value).toBe(0.3)
    expect(value).toBeCloseTo(0.3)
});

test('there is not I in team', () => {
    expect('team').not.toMatch(/I/)
})

test('there is V in elVengador', () => {
    expect('elVengador').toMatch(/V/)
});

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk'
]

test('the shopping list (iterable) has milk on it', () => {
    expect(shoppingList).toContain('milk')
    expect(new Set(shoppingList)).toContain('milk')
})

const compiledAndroidCode = () => { throw new Error('you are using wrong JDK') }

/**
 * the function throw an error need to be wrapped in a function
 */
test('compiled android goes as expected', () => {
    expect(() => compiledAndroidCode()).toThrow()
    expect(() => compiledAndroidCode()).toThrow(Error)
    expect(() => compiledAndroidCode()).toThrow('you are using wrong JDK')
    expect(() => compiledAndroidCode()).toThrow(/JDK/)
})