import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'
import { describe } from 'node:test';
 
describe('HomePage', () => {
  test('renders the main greeting and instruction', () => {
    render(<HomePage />);

    expect(screen.getByText(/Hi, my name is Fernando!/i)).toBeInTheDocument();
    expect(screen.getByText(/I’m a Passionate Senior Web Developer/i)).toBeInTheDocument();
    expect(screen.getByText(/With over 10 years of experience in designing and building scalable/i)).toBeInTheDocument();
  });

  test('renders the skills section', () => {
    render(<HomePage />);

    const skills = ['CSS', 'HTML', 'JavaScript', 'TypeScript'];

    skills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    })

    expect(screen.getByText(/My core skills/i)).toBeInTheDocument();
  })

  test('renders core skills', () => {
    render(<HomePage />);

    const coreSkills = ['FrontEnd', 'BackEnd', 'DataBase', 'Testing'];

    coreSkills.forEach(skill => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    })

    expect(screen.getByText(/My core skills/i)).toBeInTheDocument();
  });
  
  test('renders image project correctly', () => {
    render(<HomePage/>);

    const projectImage = screen.getByAltText('project-1-image');
    expect(projectImage.getAttribute('src')).toContain('project-1.png')
  })
});