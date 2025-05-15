import streamingAvailabilityClient  from './streamingAvailability.client'

export async function fetchMoviesByTitle(title: string, country: string) {
  try {
    const response = await streamingAvailabilityClient.get('/shows/search/title', {
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