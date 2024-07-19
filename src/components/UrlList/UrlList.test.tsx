import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import UrlList from './UrlList';

describe('UrlList Component', () => {
  const urlList = [
    { name: 'URL 1', url: 'https://exemplo.com/image1.png' },
    { name: 'URL 2', url: 'https://exemplo.com/image2.png' }
  ];

  test('should display URLs in the list', () => {
    render(<UrlList urlList={urlList} removeUrl={vi.fn()} />);

  
    expect(screen.getByText('URL 1')).toBeInTheDocument();
    expect(screen.getByText('URL 2')).toBeInTheDocument();
  });

  test('should call removeUrl when delete button is clicked', () => {
    const removeUrlMock = vi.fn();
    render(<UrlList urlList={urlList} removeUrl={removeUrlMock} />);

    const deleteButtons = screen.getAllByText('Excluir');
    fireEvent.click(deleteButtons[0]);

   
    expect(removeUrlMock).toHaveBeenCalledWith(0);
  });
});