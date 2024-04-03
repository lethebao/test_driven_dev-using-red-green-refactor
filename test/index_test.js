const assert = require('assert');
const Calculate = require('../index');
const { describe } = require('node:test');

describe('Calculate',() => {
    describe('.factorial',() => {
        it('return correct value of 5!',() => {
            //setup
            const expected = 120
            const input = 5

            //exercise 
            const actual = Calculate.factorial(5)

            //verify
            assert.equal(actual,expected)
        })

        it('return correct value of another input',() => {
            //setup
            const expected = 6
            const input = 3
            //exercise
            const  actual = Calculate.factorial(input)
            //verify
            assert.equal(actual,expected)
        })

        it('if 0! then return 1', () => {
            //setup
            const expected = 1
            const input = 0
            //exercise
            const  actual = Calculate.factorial(input)
            //verify
            assert.equal(actual,expected)
        })
    })
})