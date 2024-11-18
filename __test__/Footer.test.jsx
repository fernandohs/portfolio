import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Footer } from '@/components'
import { describe } from 'node:test';

describe('Footer', () => {
  const menuItems = [
    { url: '/', title: 'Home' },
    { url: '/about', title: 'About' },
    { url: '/skills', title: 'Skills' },
    { url: '/projects', title: 'Projects' },
  ];

  test('renders the footer text correctly', () => {
    render(<Footer />);
 
    expect(screen.getByText('Fernando Herrera')).toBeInTheDocument();

    const currentYear = new Date().getFullYear();

    expect(
      screen.getByText(`Copyright ${currentYear} by Fernando Herrera`)
    ).toBeInTheDocument();
  });

  test('renders all menu links', () => {
    render(<Footer />);

    menuItems.forEach(({title, url}) => {
      const link = screen.getByText(title);

      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', url);
    })
  });

  test('renders the LinkedIn icon with correct link', () => {
    render(<Footer/>);

    const linkedinLink = screen.getByTitle('Linkedin');

    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/fernando-herrera-sanchez-90699859',
    )
  });
});