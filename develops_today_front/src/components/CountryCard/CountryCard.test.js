// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import CountryCard from './CountryCard';
// import useCountryStore from '../../store/countryStore';

// jest.mock('../../store/countryStore');

// describe('CountryCard Component', () => {
//     it('renders country card with selected country name and flag', () => {
//         useCountryStore.mockReturnValue({ selectedCountry: { name: 'Spain' } });

//         render(<CountryCard country={{ flag: 'https://flagcdn.com/es.png' }} />);

//         expect(screen.getByText('Spain')).toBeInTheDocument();
//         expect(screen.getByAltText('Spain flag')).toBeInTheDocument();
//     });
// });