import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CountryInfo from './CountryInfo';
import useCountryStore from '../../store/countryStore';
import usePopulationStore from '../../store/populationStore';

// Mock correcto del store con la implementación necesaria
jest.mock('../../store/countryStore', () => {
    return jest.fn(() => ({
        selectedCountry: { name: 'Argentina', code: 'AR' },
        countryInfo: { name: 'Argentina', borders: [{ commonName: 'Chile', countryCode: 'CL' }] },
        countryFlags: [{ flag: 'https://flagcdn.com/ar.svg' }],
        setSelectedCountry: jest.fn(),
    }));
});

jest.mock('../../store/populationStore', () => {
    return jest.fn(() => ({
        populationData: [{ year: 2020, value: 45000000 }],
        fetchPopulationData: jest.fn(),
        resetPopulationData: jest.fn(),
    }));
});

describe('CountryInfo Component', () => {
    test('renders country information correctly', () => {
        render(
            <MemoryRouter>
                <CountryInfo />
            </MemoryRouter>
        );

        // Verificar que el título con el nombre del país se renderiza
        expect(screen.getByText('Argentina')).toBeInTheDocument();

        // Verificar que la imagen de la bandera se renderiza
        expect(screen.getByAltText('Argentina flag')).toBeInTheDocument();

        // Verificar que el título "Border Countries" se renderiza
        expect(screen.getByText('Border Countries')).toBeInTheDocument();
    });

    test('calls setSelectedCountry and resets population data on back button click', () => {
        const { setSelectedCountry, resetPopulationData } = useCountryStore();
        render(
            <MemoryRouter>
                <CountryInfo />
            </MemoryRouter>
        );

        const backButton = screen.getByText('Back to Country List');
        fireEvent.click(backButton);

        expect(setSelectedCountry).toHaveBeenCalledWith(null);
        expect(resetPopulationData).toHaveBeenCalledTimes(1);
    });

    test('renders border countries correctly', () => {
        render(
            <MemoryRouter>
                <CountryInfo />
            </MemoryRouter>
        );

        // Verificar que el nombre del país fronterizo se renderiza
        expect(screen.getByText('Chile')).toBeInTheDocument();
    });
});
