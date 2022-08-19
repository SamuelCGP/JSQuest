const { hello, foo } = require("./teste");

test('hello equals world', () => {
    try {
        expect(hello).toBe("world")
    } catch(e) {
        throw "'hello' não tem o valor definido como 'world'"
    }
})

test('foo equals bar', () => {
    try {
        expect(foo).toBe('bar')
    } catch(e) {
        throw "'foo' não tem o valor definido como 'bar'"
    }
})