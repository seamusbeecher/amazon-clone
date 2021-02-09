import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-409d0.cloudfunctions.net/api' //API URL (Cloud Function)
});

export default instance;