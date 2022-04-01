const fetchData = async () => Promise.resolve(['pikachu', 'bulbasaur', 'charmander', 'squirtle'])

/**
 * You need to return to this work as asynchronous test
 */
test('should find pikachu in async function', () => {
    return fetchData().then(res => expect(res).toContain('pikachu'))
});


const rejectFetchData = async () => Promise.reject('Error here')

/**
 * Use expect.assertions to be sure the amount of assertions
 */
test('shoud cath an error in async function', () => {
    expect.assertions(1);

    return rejectFetchData().catch(err => expect(err).toMatch('Error here'))
});


test('should find pikachu with .resolve', () => {
    return expect(fetchData()).resolves.toContain('bulbasaur')
});

test('should catch error with .reject', () => {
    return expect(rejectFetchData()).rejects.toMatch('Error here')
});

test('should find pikachu with async', async () => {
    const pokemons = await fetchData()
    expect(pokemons).toContain('pikachu')
});

test('should catch error with async', async () => {
    try {
        await rejectFetchData()
    } catch (err) {
        expect(err).toMatch('Error here')
    }
});

/**
 * Combine async await + .resolves .rejects
 */

test('should find pikachu and charmander with async and resolve', async () => {
    await expect(fetchData()).resolves.toContain('pikachu')
    await expect(fetchData()).resolves.toContain('charmander')
});

test('should catch error with async and rejects', async () => {
    await expect(rejectFetchData()).rejects.toMatch('Error here')
});