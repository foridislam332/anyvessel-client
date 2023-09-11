import axios from 'axios';

const useAxios = () => {
    const Axios = axios.create({
        baseURL: 'https://anyvessel-server.vercel.app/',
    });
    return [Axios];
};

export default useAxios;