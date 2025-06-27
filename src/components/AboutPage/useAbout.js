import { useState, useEffect } from 'react';

export const useAbout = () => {
  const [historyData, setHistoryData] = useState({
    milestones: [
      { year: '1990', achievement: 'School foundation' },
      { year: '2000', achievement: 'Expanded campus facilities' },
      { year: '2010', achievement: 'Introduced advanced learning programs' },
      { year: '2020', achievement: 'Digital transformation initiative' }
    ]
  });

  const [missionData, setMissionData] = useState({
    statement: 'To empower students with knowledge, skills, and values necessary for lifelong success while fostering a global perspective and commitment to service.',
    objectives: [
      {
        title: 'Academic Excellence',
        description: 'Providing high-quality education through innovative teaching methods',
        icon: 'M12 14l9-5-9-5-9 5 9 5z'
      },
      {
        title: 'Character Development',
        description: 'Building strong moral values and leadership qualities',
        icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
      },
      {
        title: 'Global Perspective',
        description: 'Fostering understanding of diverse cultures and global issues',
        icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945'
      }
    ]
  });

  const [valuesData, setValuesData] = useState({
    values: [
      {
        title: 'Integrity',
        description: 'Maintaining highest standards of honesty and ethical behavior'
      },
      {
        title: 'Innovation',
        description: 'Embracing new ideas and approaches to learning'
      },
      {
        title: 'Inclusion',
        description: 'Creating a welcoming environment for all students'
      },
      {
        title: 'Excellence',
        description: 'Striving for the highest standards in all endeavors'
      },
      {
        title: 'Community',
        description: 'Building strong relationships and supporting each other'
      },
      {
        title: 'Responsibility',
        description: 'Taking ownership of actions and their consequences'
      }
    ]
  });

  return { historyData, missionData, valuesData };
};