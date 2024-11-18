import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { VerticalTimeline} from '@/components'
import { describe } from 'node:test';

describe('VerticalTimeline', () => {
  test('renders the timeline with all projects', () => {
    render(<VerticalTimeline />);

    const projectTitles = ['3Pillar', 'SofiaXT', 'University Kino', 'Suspiros Pastelerias', 'Freelance'];
    projectTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();  
    })
  });
});