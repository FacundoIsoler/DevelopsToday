import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);

        fireEvent.click(screen.getByText('Click Me'));
        expect(handleClick).toHaveBeenCalled();
    });
});