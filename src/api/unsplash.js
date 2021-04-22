import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID q7hur1B5wcm5l0w8rDwk2TV84mTzNQXGMPXUatlSW0E'
    }

});