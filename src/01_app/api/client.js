// import { client } from "@/01_app/api/client/services.gen"
import { createClient } from '@hey-api/client-fetch';
export const msuClient = createClient({
    baseUrl: 'http://212.109.195.78:8080/',
});

msuClient.interceptors.response.use((response) => {
    if (response.status === 200) {
      console.log(`request to ${response.url} was successful`);
    }
    return response;
});

