// CountryInfo.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import useCountryStore from '../../store/countryStore';
import usePopulationStore from '../../store/populationStore';
import CountryInfo from './CountryInfo';

// Mock del chart para evitar errores relacionados con canvas
jest.mock('react-chartjs-2', () => ({
    Line: () => <div>Mocked Line Chart</div>,
}));

// Mock de useCountryStore
const mockSetSelectedCountry = jest.fn();

jest.mock('../../store/countryStore', () => ({
    __esModule: true,
    default: () => ({
        selectedCountry: { name: 'Germany', code: 'DE' },
        countryInfo: {
            name: 'Germany',
            borders: [{ commonName: 'France', countryCode: 'FR' }],
        },
        countryFlags: [{ flag: 'https://flagcdn.com/de.png' }],
        setSelectedCountry: mockSetSelectedCountry,
    }),
}));

// Mock de usePopulationStore
const mockFetchPopulationData = jest.fn();
const mockResetPopulationData = jest.fn();

jest.mock('../../store/populationStore', () => ({
    __esModule: true,
    default: () => ({
        populationData: [
            { year: 2000, value: 80000000 },
            { year: 2010, value: 82000000 },
        ],
        fetchPopulationData: mockFetchPopulationData,
        resetPopulationData: mockResetPopulationData,
    }),
}));

describe('CountryInfo Component', () => {
    it('renders country information correctly', () => {
        render(
            <MemoryRouter>
                <CountryInfo />
            </MemoryRouter>
        );

        // Verifica que el nombre del país se renderice
        expect(screen.getByText('Argentina')).toBeInTheDocument();

        // Verifica que el título de "Border Countries" se renderice
        expect(screen.getByText('Border Countries')).toBeInTheDocument();

        // Verifica que el botón "Back to Country List" se renderice
        expect(screen.getByText('Back to Country List')).toBeInTheDocument();

        // Verifica que el gráfico mockeado se renderice
        expect(screen.getByText('Mocked Line Chart')).toBeInTheDocument();
    });

    it('calls setSelectedCountry and resetPopulationData on back button click', () => {
        render(
            <MemoryRouter>
                <CountryInfo />
            </MemoryRouter>
        );

        // Simula el clic en el botón "Back to Country List"
        fireEvent.click(screen.getByText('Back to Country List'));

        // Verifica que setSelectedCountry haya sido llamado con null
        expect(mockSetSelectedCountry).toHaveBeenCalledWith(null);

        // Verifica que resetPopulationData haya sido llamado
        expect(mockResetPopulationData).toHaveBeenCalled();
    });
});
