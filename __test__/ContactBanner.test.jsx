import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import {ContactBanner} from '@/components'
import { describe } from 'node:test';

describe('ContactBanner', () => {
  test('renders the heading with correct getByText', () => {
    render(<ContactBanner />);

    expect(screen.getByText(/Let's talk!/i)).toBeInTheDocument();
  });

  test('renders the description text', () => {
    render(<ContactBanner/>);

    const description = screen.getByText(
      "Have a project or idea you’d like to bring to life? Let’s work together to create innovative and impactful digital solutions. I’d love to hear from you!"
    );

    expect(description).toBeInTheDocument();
  });

  test('renders the contact button with correct href', () => {
    render(<ContactBanner/>);

    const button = screen.getByText('Contact');
    expect(button.getAttribute('href')).toContain('mailto:fernandohs@live.com.mx');
  });
});