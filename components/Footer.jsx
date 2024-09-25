import React from 'react';

const Footer = () => {
  return (
    <div className="py-6 px-4 bg-gray-100">
      <div className="flex justify-between">
        <div className="w-1/3 mb-6">
          <p className="text-xl font-medium mb-2">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="w-1/3 mb-6">
          <hr className="my-4" />
          <p className="text-xl font-medium mb-2">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+12-212-332</li>
            <li>company@forcast.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
