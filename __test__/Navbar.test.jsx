import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Navbar } from '@/components'
import { describe } from 'node:test';
import { useRouter } from 'next/router';
 

jest.mock('next/router', () => ({ 
  useRouter: jest.fn(),
}))


jest.mock('next/link', () => {
  return ({ children, href }) => {
    const handleClick = () => {
      const router = require('next/router').useRouter();
      router.push(href)
    };
    
    return (
      <a href={href} onClick={handleClick}>
        {children}
      </a>
    );
  };
  
})

describe('Navbar', () => {
  test('renders logo', () => {
    render(<Navbar />);

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    expect(logo.getAttribute('src')).toContain('logo.png');
  });

  test('renders navigation links', () => {
    render(<Navbar />);

    const links = ['Home', 'About', 'Skills', 'Projects'];
    links.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    })
  });

  test('toggles mobile menu visibility', () => {
    render(<Navbar />);

    const menuToggle = screen.queryByTestId('menu-toggle');
    let mobileMenu = screen.queryByTestId('mobile-menu');
    
    expect(mobileMenu).toBeNull();
    expect(menuToggle).not.toBeNull();

    fireEvent.click(menuToggle);
    mobileMenu = screen.queryByTestId('mobile-menu');

    expect(mobileMenu).not.toBeNull();
    expect(mobileMenu).toBeVisible();

    fireEvent.click(menuToggle);

    mobileMenu = screen.queryByTestId('mobile-menu');
    expect(mobileMenu).toBeNull();
  });

  test('navigates to correct page on link click', () => {
    const mockPush = jest.fn();
    useRouter.mockReturnValue({
       push: mockPush
    });

    render(<Navbar />);

    const aboutLink = screen.getByText('About');
    fireEvent.click(aboutLink);

    expect(mockPush).toHaveBeenCalledWith('/about');
  })


});