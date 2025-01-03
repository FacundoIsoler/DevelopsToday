import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BorderCountry from './BorderCountry';
import useCountryStore from '../../store/countryStore';

jest.mock('../../store/countryStore', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        setSelectedCountry: jest.fn(),
    })),
}));

describe('BorderCountry Component', () => {
    const mockBorder = { commonName: 'Chile', countryCode: 'CL' };
    const { setSelectedCountry } = useCountryStore();

    test('renders border country name and flag correctly', () => {
        render(<BorderCountry border={mockBorder} />);

        expect(screen.getByText('Chile')).toBeInTheDocument();
        expect(screen.getByAltText('Chile flag')).toBeInTheDocument();
    });

    test('calls setSelectedCountry on click', () => {
        render(<BorderCountry border={mockBorder} />);

        fireEvent.click(screen.getByText('Chile'));
        expect(setSelectedCountry).toHaveBeenCalledWith({ name: 'Chile', code: 'CL' });
    });
});
