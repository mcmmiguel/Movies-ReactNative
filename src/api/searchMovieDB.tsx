import { SearchMovie } from '../interfaces';

export const searchMovie = async (searchQuery: string) => {
    if (!searchQuery) { return; }
    try {
        const resp = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=96abff0d2857dc70c90ab0fb64d78599&language=es-ES`);
        const data: SearchMovie = await resp.json();
        return data.results;
    } catch (error) {
        console.log(error);
        return [];
    }
};
