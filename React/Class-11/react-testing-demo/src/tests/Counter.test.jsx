import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

describe('Counter Tests', () => {
    test('Render initial counter', () => {
        render(<Counter />);
        // getByText accepts a regex or regular expression
        expect(screen.getByText(/Count: 0/i)).toBeInTheDocument()
    });

    test('Increment by 1', () => {
        render(<Counter />);

        const incrementBtn = screen.getByText(/increment/i);

        fireEvent.click(incrementBtn);
        expect(screen.getByText(/Count: 1/i)).toBeInTheDocument()
    })

    test('Decrement by 2', () => {
        render(<Counter />);

        const decrementBtn = screen.getByText(/decrement/i);

        fireEvent.click(decrementBtn);
        fireEvent.click(decrementBtn);

        expect(screen.getByText(/Count: -2/i)).toBeInTheDocument()
    });


    test('Decrement by 2', () => {
        render(<Counter />);

        const decrementBtn = screen.getByText(/decrement/i);

        fireEvent.click(decrementBtn);
        fireEvent.click(decrementBtn);

        const clickCount = -2;

        expect(screen.getByText(`Count: ${clickCount}`)).toBeInTheDocument()
    });
})