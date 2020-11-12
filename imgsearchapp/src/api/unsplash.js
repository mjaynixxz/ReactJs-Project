import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID M1p5jh8oump9LixHLixFGP2Lot97VcB60tUblTKjz1M' 
    }
});