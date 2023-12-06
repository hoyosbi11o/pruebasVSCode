let multiplicacion=require('../src/multiplicacion')

describe("Multiplicacion de dos numero",()=>{
    test('2 * 2 = 4',()=>{
        expect(multiplicacion(2,2)).toBe(4)
    })
})