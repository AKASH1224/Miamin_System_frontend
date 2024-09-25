import React from 'react';
import aboutImage from '../assets/about_img.png'; // Adjust the path as necessary

const About = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center px-4 py-8">
      {/* Image Section */}
      <div className="md:w-1/2 mb-4 md:mb-0">
        <img
          src={aboutImage}
          alt="About Us"
          className="w-full h-auto rounded shadow-lg"
        />
      </div>
      
      {/* Text Section */}
      <div className="md:w-1/2 md:pl-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our store! We are dedicated to providing you with the best shopping experience.
          Our team is committed to offering high-quality products and exceptional customer service.
        </p>
        <p className="text-lg mb-4">
          Our mission is to connect you with the products you love and to ensure your satisfaction 
          with every purchase. Thank you for choosing us!
        </p>
        <p className="text-lg">
          If you have any questions, feel free to reach out to us. We are here to help!
        </p>
      </div>
    </div>
    
  );
};

export default About;
