import axios from "axios";

const streamingAvailabilityClient = axios.create({
    baseURL: process.env.SA_URL_API_MOVIE,
    headers: {
        'X-RapidAPI-Key': process.env.SA_API_KEY_MOVIE,
        'X-RapidAPI-Host': process.env.SA_HOST_API_MOVIE,
    },
});
export default streamingAvailabilityClient;