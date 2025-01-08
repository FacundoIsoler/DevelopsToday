import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BorderCountry from './BorderCountry';
import useCountryStore from '../../store/countryStore';

jest.mock('../../store/countryStore');

describe('BorderCountry Component', () => {
    it('calls setSelectedCountry on click', () => {
        const mockSetSelectedCountry = jest.fn();
        useCountryStore.mockReturnValue({ setSelectedCountry: mockSetSelectedCountry });

        render(<BorderCountry border={{ commonName: 'France', countryCode: 'FR' }} />);

        fireEvent.click(screen.getByText('France'));
        expect(mockSetSelectedCountry).toHaveBeenCalledWith({ name: 'France', code: 'FR' });
    });
});
