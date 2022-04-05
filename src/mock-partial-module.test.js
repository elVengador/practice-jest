const { bar, baz } = require('./foo-bar-baz');

jest.mock('./foo-bar-baz', () => {
    const originalModule = jest.requireActual('./foo-bar-baz')

    return {
        __esModule: true,
        ...originalModule,
        baz: jest.fn(() => 'mocked baz'),
        foo: 'mocked foo'
    }
})
test('should mock partial module', () => {
    const bazResult = baz()
    expect(bazResult).toBe('mocked baz')
    expect(baz).toHaveBeenCalled() // toHaveBeenCalled to check only 1if mock functions was called

    const barResult = bar()
    expect(barResult).toBe('bar')
});


