import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-409d0.cloudfunctions.net/api' //API URL (Cloud Function)
    // 'http://localhost:5001/clone-409d0/us-central1/api' (TEXT API)
});

export default instance;