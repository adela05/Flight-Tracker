import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://opensky-network.org/api/states/all',
    params: {
        maxResults: 10,
        method: 'get',
    }
});

export default openSky;