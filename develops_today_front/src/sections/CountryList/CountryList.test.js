import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CountryList from './CountryList';
import useCountryStore from '../../store/countryStore';

jest.mock('../../store/countryStore');

describe('CountryList Component', () => {

    it('calls setSelectedCountry and navigates on country click', () => {
        const mockSetSelectedCountry = jest.fn();
        const mockNavigate = jest.fn();

        useCountryStore.mockReturnValue({
            countries: [{ name: 'USA', countryCode: 'US' }],
            fetchCountries: jest.fn(),
            setSelectedCountry: mockSetSelectedCountry,
        });

        render(
            <MemoryRouter>
                <CountryList />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByText('USA'));
        expect(mockSetSelectedCountry).toHaveBeenCalledWith({ name: 'USA', code: 'US' });
    });
});
