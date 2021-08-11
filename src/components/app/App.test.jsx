import React from 'react';
import { render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
});
