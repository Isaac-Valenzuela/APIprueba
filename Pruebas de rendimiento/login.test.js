const {performance} = require('perf_hooks') // API de medicion de tiempo y rendimiento, exportada con CommonJS

describe('Prueba de rendimiento - Validacion de Login', ()=>{
    test('Validacion de credenciales', () =>{
        const email = 'user1@gmail.com'
        const password = '123456'

        const start = performance.now() // Mide el tiempo en ms durante la ejecucion del codigo

        const autentico = (email === 'user1@gmail.com' && password === '123456')
        const end = performance.now()
        
        const tiempo = end - start

        console.log(`Tiempo de ejecucion: ${tiempo} ms`)

        expect(tiempo).toBeLessThan(50) // Define el tiempo maximo esperado de ejecucion del codigo
        expect(autentico).toBe(true) // Expecta que el resultado de la prueba sea verdadero
        
    })
})