import { useState } from 'react';

const useHome = () => {
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      alert('Thank you for your interest! We will contact you soon.');
      e.target.reset();
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return {
    handleContactSubmit,
  };
};

export default useHome;