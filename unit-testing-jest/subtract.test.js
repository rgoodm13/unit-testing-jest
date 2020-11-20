const { test, expect } = require('@jest/globals')
const subtract = require('./subtract')

test('subtract 2 nums', ()=>{
    expect(subtract(3,1)).toBe(2)
})