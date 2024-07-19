import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UrlInputForm from './UrlInputForm';

describe('UrlInputForm Component', () => {
  test('should call addUrl with the correct URL when Enter is pressed', () => {
    const addUrlMock = vi.fn();
    render(<UrlInputForm addUrl={addUrlMock} />);

    const input = screen.getByPlaceholderText('Coloque a URL');
    fireEvent.change(input, { target: { value: 'https://example.com/image1.png' } });

    expect(input).toHaveValue('https://example.com/image1.png');

    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(addUrlMock).toHaveBeenCalledWith('https://example.com/image1.png');
    expect(input).toHaveValue('');
  });

  test('should call addUrl with the correct URL when button is clicked', () => {
    const addUrlMock = vi.fn();
    render(<UrlInputForm addUrl={addUrlMock} />);

    const input = screen.getByPlaceholderText('Coloque a URL');
    fireEvent.change(input, { target: { value: 'https://example.com/image1.png' } });

    expect(input).toHaveValue('https://example.com/image1.png');

    const addButton = screen.getByText('Adicione a URL');
    fireEvent.click(addButton);

    expect(addUrlMock).toHaveBeenCalledWith('https://example.com/image1.png');
    expect(input).toHaveValue('');
  });
});
