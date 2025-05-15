import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' }); // Fuerza la ruta


const API_KEY = process.env.API_KEY_MOVIE; // Asegúrate de definir esta variable en tu entorno
const BASE_URL = process.env.URL_API_MOVIE;

console.log(`URL: ${BASE_URL}`)
console.log(`API KEY: ${API_KEY}`)



const movieOfTheNightClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com',
  },
});


export async function searchMovies(title: string, country: string = 'ec') {
  try {
    const response = await movieOfTheNightClient.get('/shows/search/title', {
      params: {
        title,
        country,
        show_type: 'movie',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al buscar películas:', error);
    throw error;
  }
}



searchMovies("batman")
  .then(data => {
    console.log("✅ Conexión exitosa. Resultados:");
    console.dir(data, { depth: null });
  })
  .catch(err => {
    console.error("❌ Error al conectar con la API:", err.response?.data || err.message);
  });