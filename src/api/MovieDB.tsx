import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '96abff0d2857dc70c90ab0fb64d78599',
        language: 'es-ES',
    },
});

export default movieDB;
