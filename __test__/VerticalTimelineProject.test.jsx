import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { VerticalTimelineProject} from '@/components'
import { describe } from 'node:test';

describe('VerticalTimelineProject', () => {

  const projectProps = {
    title: '3Pillar',
    dateBetween: '2022 - present',
    role: 'Front End Developer',
    isLeftContent: false,
  };

  test('renders project details', () => {
    render(<VerticalTimelineProject {...projectProps}/>);

    expect(screen.getByText(projectProps.title)).toBeInTheDocument();
    expect(screen.getByText(projectProps.dateBetween)).toBeInTheDocument();
    expect(screen.getByText(projectProps.role)).toBeInTheDocument();
  });

  
});