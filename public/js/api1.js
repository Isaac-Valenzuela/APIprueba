const resultadoDiv = document.getElementById('resultado');

const fetchData = async () => {
    const loadingMessage = document.createElement('p');
    loadingMessage.textContent = 'Cargando imagen de un perro...';
    resultadoDiv.appendChild(loadingMessage);

    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();

        if (data.status === 'success') {
            const img = document.createElement('img');
            img.src = data.message;
            resultadoDiv.appendChild(img);
        } else {
            console.error('Error:', data.message);
            resultadoDiv.textContent = 'No se pudo cargar la imagen del perro.';
        }

        loadingMessage.remove();
    } catch (error) {
        console.error('Error:', error);
        resultadoDiv.textContent = 'Error al obtener la imagen del perro.';
    }
};

fetchData();