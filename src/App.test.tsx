import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Navbar', () => () => <div>Navbar</div>);
jest.mock('./components/Footer', () => () => <div>Footer</div>);
jest.mock('./pages/Home', () => () => <h1>Barczak Okna</h1>);
jest.mock('./pages/Offer', () => () => <div>Offer page</div>);
jest.mock('./pages/Contact', () => () => <div>Contact page</div>);

test('renders the app shell and home route', () => {
  render(<App />);
  expect(screen.getByText('Navbar')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /barczak okna/i })).toBeInTheDocument();
  expect(screen.getByText('Footer')).toBeInTheDocument();
});
