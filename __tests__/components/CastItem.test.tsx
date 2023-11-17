import React from 'react';
import { screen, render } from '@testing-library/react-native';
import { CastItem } from '../../src/components/CastItem';
import { Cast } from '../../src/interfaces';

describe('Tests in <CastItem />', () => {

    const actor: Cast = {
        'adult': false,
        'gender': 2,
        'id': 3926,
        'known_for_department': 'Acting',
        'name': 'Albert Finney',
        'original_name': 'Albert Finney',
        'popularity': 9.731,
        'profile_path': '/8WCFO9lMHel1bHVYl5lj8pYEw2s.jpg',
        'cast_id': 1,
        'character': 'George Dunlap',
        'credit_id': '52fe4842c3a36847f815e705',
        'order': 0,
    };

    test('Should match with the snapshot', () => {

        render(<CastItem actor={actor} />);
        expect(screen).toMatchSnapshot();

    });

    test('Should render the data successfully', () => {

        render(<CastItem actor={actor} />);

        const img = screen.getByTestId('actor-image');
        const imgSource = img.props.source;
        const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

        expect(img).toBeTruthy();
        expect(imgSource.uri).toBe(uri);
        expect(screen.getByText(actor.name)).toBeTruthy();
        expect(screen.getByText(actor.original_name)).toBeTruthy();
        screen.debug();

    });

});
