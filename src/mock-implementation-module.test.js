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

const giveAnEvenNumber = jest
    .fn()
    .mockImplementationOnce(() => 20)
    .mockImplementationOnce(() => 60)
    .mockImplementationOnce(() => 100)

const isEvenNumber = (number) => number % 2 === 0

test('should check an even number', () => {
    expect(isEvenNumber(giveAnEvenNumber())).toBe(true)
    expect(isEvenNumber(giveAnEvenNumber())).toBe(true)
    expect(isEvenNumber(giveAnEvenNumber())).toBe(true)
})

test('should verify the mock function was called', () => {
    const res = isEvenNumber(giveAnEvenNumber())
    console.log('RES', res);
    expect(giveAnEvenNumber).toHaveBeenCalled()
    expect(giveAnEvenNumber).toHaveBeenCalledWith()
})