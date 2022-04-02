const axios = require('axios');

jest.mock('axios');

const getChuckNorrisJoke = async () => {
    const res = await axios.get('https://api.chucknorris.io/jokes/random')
    return res.data.value
}

const mockResponse = {
    data: {
        value: 'mock Joke'
    }
}

test('should mock fetch random chuck norris joke', async () => {
    axios.get.mockResolvedValue(mockResponse)
    // or you could use the following depending on your use case:
    // axios.get.mockImplementation(() => Promise.resolve(resp))
    const response = await getChuckNorrisJoke()
    console.log(response);
    expect(response).toMatch("mock Joke")
});