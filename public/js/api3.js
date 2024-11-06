async function obtenerPelicula() {
    try {
        const respuesta = await fetch("https://moviesapi.ir/api/v1/movies");
        const datos = await respuesta.json();
        const peliculas = datos.data;
        const peliculaAleatoria = peliculas[Math.floor(Math.random() * peliculas.length)];
        
        mostrarPelicula(peliculaAleatoria);

    } catch (error) {
        console.error("Error al obtener datos de la API de Películas:", error);
    }
}

function mostrarPelicula(pelicula) {
    const contenedor = document.getElementById('resultado');
    contenedor.innerHTML = `
        <div class="movie">
            <img src="${pelicula.poster}" alt="${pelicula.title}">
            <h2>${pelicula.title}</h2>
            <p><strong>Calificación:</strong> ${pelicula.imdb_rating || "N/A"}</p>
            <p><strong>Año:</strong> ${pelicula.year}</p>
            <p><strong>Género:</strong> ${pelicula.genres.join(", ") || "No disponible"}</p>
        </div>
    `;
}

document.getElementById('obtener-pelicula').addEventListener('click', obtenerPelicula);

obtenerPelicula(); // Cargar una película al iniciar la página