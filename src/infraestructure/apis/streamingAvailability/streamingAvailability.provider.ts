import { mapToSimpleMovie } from "./streamingAvailability.mapper";
import { fetchMoviesByTitle } from "./streamingAvailability.services";


export class StreamingAvailabilityProvider {
  async search(title: string, country: string="ec"): Promise<any[]> {
    const rawResults = await fetchMoviesByTitle(title, country);

    if (!Array.isArray(rawResults)) return [];

    return rawResults.map(item => mapToSimpleMovie(item, country));
  }
}