import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AboutPage from '@/app/about/page'
import { describe } from 'node:test';

describe('AboutPage', () => {
  test('renders all hobbies', () => {
    render(<AboutPage />);

    const hobbies = [
      "Video Games",
      "Movies",
      "Hiking",
      "Yoga",
      "Spinning",
      "Running",
      "Reading",
    ];

    hobbies.forEach(hobby => {
      expect(screen.getByText(hobby)).toBeInTheDocument();  
    })
  });
});
