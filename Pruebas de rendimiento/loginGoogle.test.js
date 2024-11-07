const { initializeForm, onSignIn, handleCredentialResponse } = require('../login') // Exporta componente de login.js con commonJS
const {performance} = require('perf_hooks') // API de medicion de tiempo y rendimiento, exportada con CommonJS

global.google = {
    accounts:{
        id:{
            initialize: jest.fn(),
            rederButton:jest.fn(),
            prompt: jest.fn(),
        },
    },
} // Simula la funcionalidad de la API de Google Sign-In en el entorno de pruebas.


beforeEach(()=>{
    document.body.innerHTML = // Crea un archivo html simulado para el testeo
    `<div class="login-form">
            <form>
                <div class="form-group">
                    <label for="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    `;
    initializeForm() // Trae los datos de login.js del inicio de sesion
})

describe('Google API Login', () =>{
    const start = performance.now() // Mide el tiempo en ms durante la ejecucion del codigo
    test('Debe ejecutar la funcion onSignIn correctamente', ()=>{
        const googleUser = {
            getBasicProfile: jest.fn(()=>({ // trae los datos de la simulacion del entorno
                getName: () => 'Adrian Ramos',
                getEmail: () => 'user@gmail.com'
            })),
            getAuthResponse: jest.fn(()=>({ // trae un token id simulado
                id_token: 'fake_id_token'
            }))
        }

        delete window.location 
        window.location = {href: ''} // simula la redireccion a la pagina 

        onSignIn(googleUser)
        expect(window.location.href).toBe('menu.html') // verifica que el usuarios simulado haya sido redirigido a la pagina
    })

    test('Debe manejar correctamente las respuestas del token ', ()=>{
        const response = { credential: 'fake-google-id'} // crea una respuesta simulada del token falso
        console.log = jest.fn();

        delete window.location

        window.location = { href: ''}

        handleCredentialResponse(response)

        expect(console.log).toHaveBeenCalledWith('ID Token: fake-google-id'); // confirma que el token fue registrado
        expect(window.location.href).toBe('menu.html') // verifica la redireccion del usuario simulado a la pagina
    })

    const end = performance.now()
        
        const tiempo = end - start

        console.log(`Tiempo de ejecucion2: ${tiempo} ms`)

        expect(tiempo).toBeLessThan(50) // Define el tiempo maximo esperado de ejecucion del codigo
})