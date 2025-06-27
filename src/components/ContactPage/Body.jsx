import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import Map from './Map';
import useContact from './useContact';
import images from '../assets/images';

const Body = () => {
  const { handleSubmit, loading, error, success } = useContact();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Us</h1>
      
      <div id="Body_3" className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div id="Body_4">
          <ContactInfo />
          <Map />
        </div>
        
        <div id="Body_5">
          <ContactForm 
            onSubmit={handleSubmit}
            loading={loading}
            error={error}
            success={success}
          />
        </div>
      </div>
    </div>
  );
};

export default Body;