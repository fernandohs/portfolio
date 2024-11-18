import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ProjectPage from '@/app/projects/[id]/page'
import { describe } from 'node:test';
import { promises as fs } from 'fs';


jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

describe('ProjectPage', () => {
  const mockProject = {
    id: '1',
    role: 'Front End',
    industry: 'Education',
    title: 'SofiaXT - WhatIf',
    description: 'Tool that allows students to create essays based on historical cases.',
    challenge: 'The main challenge was creating an intuitive interface.',
    solution: 'The solution was implemented using efficient front-end practices.',
    systemImages: ['/project-1-system-1.png', '/project-1-system-2.png'],
    keyAways: [
      { key: 'Real-Time Updates', description: 'Ensured seamless real-time collaboration.' },
      { key: 'Scalable Architecture', description: 'Developed modular components.' },
    ],
  }

  jest.spyOn(fs, 'readFile').mockImplementation(async () => {
    return JSON.stringify({projects: [mockProject]})
  });

  test('renders project details correctly', async () => {
      const params = { id: '1'};

      render( await ProjectPage({params}));

      expect(screen.getByText(mockProject.title)).toBeInTheDocument();
      expect(screen.getByText(mockProject.description)).toBeInTheDocument();
      expect(screen.getByText(mockProject.role)).toBeInTheDocument();
      expect(screen.getByText(mockProject.solution)).toBeInTheDocument();
      expect(screen.getByText(mockProject.challenge)).toBeInTheDocument();
  });


  test('renders key takeaways list', async () => {
    const params = { id: '1'};

    render( await ProjectPage({params}));

    mockProject.keyAways.forEach(({key, description}) => {
      expect(screen.getByText(key)).toBeInTheDocument();
      expect(screen.getByText(description)).toBeInTheDocument();
    })

  });

  test('calls notFound if project does not exist', async() => {
    const {notFound} = require('next/navigation');
    const params = { id: '2' };

    await ProjectPage({params});

    expect(notFound).toHaveBeenCalled();
  })


});
