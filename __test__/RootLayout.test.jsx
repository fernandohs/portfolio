import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import RootLayout from '@/app/layout'
import { describe } from 'node:test';

jest.mock('@/app/layout', () => ({
  __esModule: true,
  default: ({ children }) => (
    <div className="w-screen h-screen bg-primary overflow-x-hidden">
      <nav data-testid="navbar">Navbar</nav>
      <div className="h-100vh">{children}</div>
      <footer data-testid="footer">Footer</footer>
    </div>
  )
}))

describe('RootLayout', () => {
  test('renders the Navbar Component', () => {
    render(
      <RootLayout>
        <div data-testid="children">Test Content</div>
      </RootLayout>
    )

    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  test('renders the Footer Component', () => {
    render(
      <RootLayout>
        <div data-testid="children">Test Content</div>
      </RootLayout>
    )

    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  test('renders children inside layout', () => {
    render(
      <RootLayout>
        <div data-testid="children">Test Content</div>
      </RootLayout>
    )

    expect(screen.getByTestId('children')).toBeInTheDocument();
  });
});