import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SkillsPage from '@/app/skills/page'
import { describe } from 'node:test';

describe('SkillsPage', () => {
  test('renders all skill categories', () => {
    render(<SkillsPage />);

    const categories = ['FrontEnd', 'BackEnd', 'Database', 'Testing', 'Languages'];
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();  
    })
  });
});