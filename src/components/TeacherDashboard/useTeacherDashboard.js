import { useState, useEffect } from 'react';

export const useTeacherDashboard = () => {
  const [schedules, setSchedules] = useState([]);
  const [students, setStudents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        // Mock data for demonstration
        setSchedules([
          { className: 'Mathematics', time: '9:00 AM - 10:30 AM' },
          { className: 'Science', time: '11:00 AM - 12:30 PM' },
          { className: 'English', time: '2:00 PM - 3:30 PM' }
        ]);

        setStudents([
          { name: 'John Doe', id: '001', grade: 'A' },
          { name: 'Jane Smith', id: '002', grade: 'B+' },
          { name: 'Mike Johnson', id: '003', grade: 'A-' }
        ]);

        setAnnouncements([
          { title: 'Parent-Teacher Meeting', content: 'Scheduled for next Friday', date: '2024-02-01' },
          { title: 'Science Fair', content: 'Submissions due next week', date: '2024-02-05' }
        ]);

        setLoading(false);
      } catch (err) {
        setError('Failed to fetch dashboard data');
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return { schedules, students, announcements, loading, error };
};
