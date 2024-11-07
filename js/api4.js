async function obtenerAnime() {
    try {
        const respuesta = await fetch('https://api.jikan.moe/v4/top/anime');
        const datos = await respuesta.json();
        
        const animeAleatorio = datos.data[Math.floor(Math.random() * datos.data.length)];

        mostrarAnime(animeAleatorio);
    } catch (error) {
        console.error("Error al obtener datos de Jikan API:", error);
    }
}

function mostrarAnime(anime) {
    const contenedor = document.getElementById('resultado');
    const imagen = anime.images.jpg.image_url ? anime.images.jpg.image_url : 'https://via.placeholder.com/300x300.png?text=No+Image'; 

    contenedor.innerHTML = `
        <div class="anime">
            <img src="${imagen}" alt="${anime.title}">
            <h2>${anime.title}</h2>
            <p><strong>Tipo:</strong> ${anime.type}</p>
            <p><strong>Género:</strong> ${anime.genres.map(g => g.name).join(', ')}</p>
            <p><strong>Ranking:</strong> ${anime.rank}</p>
        </div>
    `;
}

document.getElementById('obtener-anime').addEventListener('click', obtenerAnime);

obtenerAnime(); 