const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === 'usuario@ejemplo.com' && password === 'contraseña123') {
        window.location.href = 'menu.html';
    } else {
        alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
});

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;

    window.location.href = 'menu.html';
}

function onFailure(error) {
    console.error(error);
}

function handleCredentialResponse(response) {
    console.log("ID Token: " + response.credential);

    // Redirige o confirma inicio de sesión
    window.location.href = 'menu.html';  // redirección
}

// Configura el evento al cargar el script
window.onload = function() {
    google.accounts.id.initialize({
        client_id: "193073252936-vbvttpmv0llent1msrkl2cgba9hhji41.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.querySelector('.g_id_signin'),
        { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt(); // Muestra el prompt de inicio de sesión
}

