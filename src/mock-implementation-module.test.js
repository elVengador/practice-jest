/**
 * Also we can mock changing the implementation of a module
 */

const foo = require('./foo');

jest.mock('./foo')
foo.mockImplementation(() => 42)


test('should mock implementation module', () => {
    const result = foo()
    expect(result).toBe(42)
});


/**
 * Also we can implement many time execution of function with mockImplementationOnce
 */

