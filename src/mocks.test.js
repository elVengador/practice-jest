const forEach = (items, callback) => {
    for (let index = 0; index < items.length; index++) {
        callback(items[index])
    }
}


test('should check forEach with mock function', () => {
    const mockFunction = jest.fn(x => 42 + x)

    forEach([0, 1], mockFunction)

    // function is called twice
    expect(mockFunction.mock.calls.length).toBe(2)

    // the first argument of the first call was 0
    expect(mockFunction.mock.calls[0][0]).toBe(0)

    // the first argument of the second call was 1
    expect(mockFunction.mock.calls[1][0]).toBe(1)

    // the value of the first call was 42
    expect(mockFunction.mock.results[0].value).toBe(42)

    // the first argument from last called is 1
    expect(mockFunction.mock.lastCall[0]).toBe(1)
});


const myMock = jest.fn()
console.log('>>>>>>>>>>>>>>>> ', myMock());
myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true)
console.log(myMock(), myMock(), myMock(), myMock());