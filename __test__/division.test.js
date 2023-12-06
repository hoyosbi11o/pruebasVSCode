let division=require('../src/division')

describe('Division de dos numero',()=>{
    test('10 / 2 = 5',()=>{
        expect(division(10,2)).toBe(5)
    })
})