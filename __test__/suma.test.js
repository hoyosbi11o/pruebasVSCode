let suma=require('../src/suma')

describe("Prueba de suma de dos numero", ()=>{
    test('2+2 = 4', ()=>{
        expect(suma(2,2)).toBe(4)
    })
})