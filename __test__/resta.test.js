let resta=require('../src/resta')

describe("Resta de dos numeros",()=>{
    test("5 - 2 = 3",()=>{
        expect(resta(5,2)).toBe(3)
    })
})