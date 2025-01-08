import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CountryList from './CountryList';
import useCountryStore from '../../store/countryStore';

jest.mock('../../store/countryStore');

describe('CountryList Component', () => {
    // it('renders list of countries correctly', () => {
    //     useCountryStore.mockReturnValue({
    //         countries: [
    //             { name: 'USA', countryCode: 'US' },
    //             { name: 'Canada', countryCode: 'CA' },
    //         ],
    //         fetchCountries: jest.fn(),
    //         setSelectedCountry: jest.fn(),
    //     });

    //     render(
    //         <MemoryRouter>
    //             <CountryList />
    //         </MemoryRouter>
    //     );

    //     expect(screen.getByText('USA')).toBeInTheDocument();
    //     expect(screen.getByText('Canada')).toBeInTheDocument();
    // });

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
