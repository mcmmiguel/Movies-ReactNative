import React, { createContext, useState } from 'react';

interface PosterColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: PosterColors;
    prevColors: PosterColors;
    setMainColors: (colors: PosterColors) => void;
    setPrevMainColors: (colors: PosterColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider = ({ children }: any) => {

    const [colors, setColors] = useState<PosterColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const [prevColors, setPrevColors] = useState<PosterColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const setMainColors = (colors: PosterColors) => {
        setColors(colors);
    };

    const setPrevMainColors = (colors: PosterColors) => {
        setPrevColors(colors);
    };

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors,
        }}>
            {children}
        </GradientContext.Provider>
    );
};
