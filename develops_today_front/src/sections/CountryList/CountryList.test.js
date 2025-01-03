import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CountryList from './CountryList';
import useCountryStore from '../../store/countryStore';

// Mock del store
jest.mock('../../store/countryStore', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        countries: [{ name: 'Argentina', countryCode: 'AR' }],
        fetchCountries: jest.fn(),
        setSelectedCountry: jest.fn(),
    })),
}));

describe('CountryList Component', () => {
    test('renders list of countries correctly', () => {
        render(
            <MemoryRouter>
                <CountryList />
            </MemoryRouter>
        );

        expect(screen.getByText('Argentina')).toBeInTheDocument();
    });

    test('calls setSelectedCountry and navigates on country click', () => {
        const { setSelectedCountry } = useCountryStore();
        render(
            <MemoryRouter>
                <CountryList />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('Argentina'));
        expect(setSelectedCountry).toHaveBeenCalledWith({ name: 'Argentina', code: 'AR' });
    });
});
