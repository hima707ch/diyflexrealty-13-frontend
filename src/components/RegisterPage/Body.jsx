import React from 'react';
import RegistrationForm from './RegistrationForm';
import images from '../assets/images';

const Body = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8" id="Body_1">
      <div className="sm:mx-auto sm:w-full sm:max-w-md" id="Body_2">
        <img
          className="mx-auto h-12 w-auto"
          src={images[0]}
          alt="School Logo"
          id="Body_3"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" id="Body_4">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600" id="Body_5">
          Join our school portal today
        </p>
      </div>
      <RegistrationForm />
    </div>
  );
};

export default Body;