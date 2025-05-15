// src/main.ts
import dotenv from 'dotenv';
dotenv.config();

import { StreamingAvailabilityProvider } from './infraestructure/apis/streamingAvailability/streamingAvailability.provider';

async function main() {
  const provider = new StreamingAvailabilityProvider();
  const movies = await provider.search("batman");
  console.log(movies); // Aquí sí tienes el resultado real
}

main();
