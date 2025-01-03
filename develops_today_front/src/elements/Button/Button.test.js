import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
    test('renders button with children correctly', () => {
        render(<Button>Click Me</Button>);
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });

    test('calls onClick when clicked', () => {
        const mockOnClick = jest.fn();
        render(<Button onClick={mockOnClick}>Click Me</Button>);

        fireEvent.click(screen.getByText('Click Me'));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
