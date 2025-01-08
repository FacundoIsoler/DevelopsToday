import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import useCountryStore from '../../store/countryStore';
import usePopulationStore from '../../store/populationStore';
import CountryInfo from './CountryInfo';

jest.mock('react-chartjs-2', () => ({
    Line: () => <div>Mocked Line Chart</div>,
}));

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

        expect(screen.getByText('Argentina')).toBeInTheDocument();

        expect(screen.getByText('Border Countries')).toBeInTheDocument();

        expect(screen.getByText('Back to Country List')).toBeInTheDocument();

        expect(screen.getByText('Mocked Line Chart')).toBeInTheDocument();
    });

    it('calls setSelectedCountry and resetPopulationData on back button click', () => {
        render(
            <MemoryRouter>
                <CountryInfo />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Back to Country List'));

        expect(mockSetSelectedCountry).toHaveBeenCalledWith(null);

        expect(mockResetPopulationData).toHaveBeenCalled();
    });
});
