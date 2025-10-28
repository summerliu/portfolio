import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site navigation name', () => {
    render(<App />);
    expect(screen.getByRole('link', { name: /summer liu/i })).toBeInTheDocument();
});
