import { ContactBanner } from '@/components';
import { Project } from '@/components/Project';

const projects = [
  {
    id: '1',
    title: 'SofiaXT - WhatIf',
    description: 'Tool that allows students to create essays based on historical cases, where they must defend their positions using well-reasoned arguments. The process involves teamwork, with each team member writing an individual essay and ultimately contributing to a collaborative group essay. Two teams are formed, each taking opposing stances—either in favor or against a given topic—fostering critical thinking and debate skills.'
  },
  {
    id: '2',
    title: '3Pillar: Newspaper',
    description: `The Telegraph's digital platform is powered by Adobe Experience Manager (AEM), a sophisticated content management system (CMS) designed to handle high-traffic websites and deliver personalized, high-quality user experiences. The system facilitates the creation, management, and distribution of a wide range of content types, including articles, multimedia, and interactive features, while ensuring seamless integration with marketing and analytics tools.`
  },
  {
    id: '3',
    title: '3Pillar: Report System',
    description: `The Cross Screen Media reporting system is a robust analytics platform designed to measure and optimize advertising campaigns across multiple channels, including Connected TV (CTV), linear TV, and digital platforms.`
  },
  {
    id: '4',
    title: 'SofiaXT - QualifyXT',
    description: `A comprehensive tool designed specifically for teachers, providing robust features to effectively manage student groups, assign tasks, and customize grading methods according to their needs. This tool also enables educators to streamline the process of generating detailed grade reports, offering insights into the performance of each student within their respective groups. By simplifying these essential tasks, it helps teachers save time, stay organized, and focus more on delivering quality education.`
  },
]

export const ProjectsPage = () => {
  return (
    <div className="h-full flex flex-col items-center px-5 xl:px-20">
      <h1 className="text-2xl md:text-5xl text-center xl:my-10">
        Some of my projects
      </h1>
        {
          projects.map((item, index) => <Project key={`project-${item.id}`} {...item} addBorderBottom={ index < projects.length - 1}/> )
        }
        <ContactBanner/>
    </div>
  );
};

export default ProjectsPage;
