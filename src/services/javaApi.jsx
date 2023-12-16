import axios from 'axios';

const api = axios.create({
    baseURL: 'http://where2go-env-1.eba-b9euqnni.us-east-2.elasticbeanstalk.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;