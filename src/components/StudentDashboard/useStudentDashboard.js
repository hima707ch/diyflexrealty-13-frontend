import { useState, useEffect } from 'react';

export const useStudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        // Simulated data since no specific API endpoint was provided
        const mockData = {
          name: 'John Doe',
          assignments: [
            { title: 'Math Assignment', dueDate: '2024-02-01', status: 'pending' },
            { title: 'Science Project', dueDate: '2024-02-05', status: 'completed' },
            { title: 'History Essay', dueDate: '2024-02-10', status: 'pending' }
          ],
          grades: [
            { subject: 'Mathematics', score: 85 },
            { subject: 'Science', score: 92 },
            { subject: 'History', score: 78 },
            { subject: 'English', score: 88 }
          ],
          events: [
            { date: '15', month: 'Feb', title: 'Math Quiz', time: '10:00 AM', location: 'Room 101' },
            { date: '18', month: 'Feb', title: 'Science Lab', time: '2:00 PM', location: 'Lab 3' },
            { date: '20', month: 'Feb', title: 'Study Group', time: '4:00 PM', location: 'Library' }
          ]
        };

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setStudentData(mockData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch student data');
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  return { studentData, loading, error };
};