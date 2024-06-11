import axios from 'axios';
const axiosCLI= axios.create({
    baseURL: import.meta.env.VITE_URL_DESTINY_API,

})

export default axiosCLI;