import { Dispatch, SetStateAction } from 'react';
import { Cast } from './creditsInterface';
import { Movie, MovieFull } from './movieInterface';

export interface CastItemProps {
    actor: Cast
}

export interface GradientBackgroundProps {
    children: JSX.Element | JSX.Element[];
}

export interface HorizontalSliderProps {
    title?: string;
    movies: Movie[];
}

export interface MovieDetailsProps {
    movieFull: MovieFull;
    cast: Cast[];
}

export interface MoviePosterProps {
    movie: Movie;
    height?: number;
    width?: number;
}

export interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

export interface SearchMovieResultsProps {
    movieResults: Movie[];
}

export interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
    setSearchResults: Dispatch<SetStateAction<Movie[]>>;
}
