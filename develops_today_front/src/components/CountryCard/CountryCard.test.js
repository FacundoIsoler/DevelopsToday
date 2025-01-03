import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CountryCard from './CountryCard';

describe('CountryCard Component', () => {
  const mockCountry = { name: 'Argentina', flag: 'https://flagcdn.com/ar.svg' };
  const mockOnClick = jest.fn();

  test('renders country name and flag correctly', () => {
    render(<CountryCard country={mockCountry} onClick={mockOnClick} />);

    expect(screen.getByText('Argentina')).toBeInTheDocument();
    expect(screen.getByAltText('Argentina flag')).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    render(<CountryCard country={mockCountry} onClick={mockOnClick} />);

    fireEvent.click(screen.getByText('Argentina'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
