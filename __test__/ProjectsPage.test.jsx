import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ProjectsPage from '@/app/projects/page'
import { describe } from 'node:test';

describe('ProjectsPage', () => {
  test('renders the page with header', () => {
    render(<ProjectsPage />);

    expect(screen.getByText(/some of my projects/i)).toBeInTheDocument();
  });

  test('renders all projects', () => {
    render(<ProjectsPage />);

    const projectTitles = [
      'SofiaXT - WhatIf',
      '3Pillar: Newspaper',
      '3Pillar: Report System',
      'SofiaXT - QualifyXT',
    ]

    projectTitles.forEach(title => {
      const container = screen.getByText(title, { selector: 'h1'})

      expect(container).toHaveTextContent(title)
    });
  });

  test('renders "see project" buttons for all projects', () => {
    render(<ProjectsPage />);

    const seeProjectButtons = screen.getAllByText(/see project/i, {
      selector: 'a'
    })

    expect(seeProjectButtons).toHaveLength(4);
  });
});