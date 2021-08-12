/* eslint-disable max-len */
import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());

  it('renders loading and inputs a value', async () => {
    const page = await render(
      <MemoryRouter initialEntries={['/home']}>
        <App />
      </MemoryRouter>
    );

    page.getByAltText('loading...');

    const searchInput = page.getByPlaceholderText('search');

    fireEvent.change(searchInput, { target: { value: 'candy' } });
    expect(searchInput.value).toBe('candy');
  });

  it('displays a list of releases', async () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <App />
      </MemoryRouter>
    );

    return () => {
      const ul = screen.findByTestId('releaselist');
      expect(ul).not.toBeEmptyDOMElement();
    };
  });
});


