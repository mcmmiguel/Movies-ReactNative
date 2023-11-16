import { useState } from 'react';
import { Movie, SearchMovie } from '../interfaces';

export const useSearch = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Movie[]>([]);

    const onChangeSearchQuery = (search: string = '') => {
        setSearchQuery(search);
    };

    const onSearchMovie = async () => {
        try {
            const resp = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&api_key=96abff0d2857dc70c90ab0fb64d78599&language=es-ES`);
            const data: SearchMovie = await resp.json();
            setSearchResults(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    return {
        searchQuery,
        searchResults,
        onChangeSearchQuery,
        onSearchMovie,
    };

};
