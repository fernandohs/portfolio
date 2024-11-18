import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { CoreSkill } from '@/components'
import { describe } from 'node:test';

jest.mock('next/image', () => ({
  __esModule: true,
  default: props => <img {...props} />,
}))

describe('CoreSkill', () => {
  const mockProps = {
    url: '/test-image.png',
    title: 'test skill',
  };

  test('renders the image with correct src and alt text', () => {
    render(<CoreSkill {...mockProps}/>);
    
    const image = screen.getByAltText('Core Skill');
    
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProps.url);
    expect(image).toHaveAttribute('width', '130');
    expect(image).toHaveAttribute('height', '130');
  });

  test('renders the title with text correctly', () => {
    render(<CoreSkill {...mockProps}/>);
    
    const title = screen.getByText(mockProps.title);

    expect(title).toBeInTheDocument();
  })
});