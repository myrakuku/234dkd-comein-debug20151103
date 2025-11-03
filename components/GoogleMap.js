import React from 'react';

const GoogleMap = () => {
  return (
    <div className="flex justify-center m-10">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14763.786551214533!2d114.15209885541994!3d22.31785779999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x340401b0e0134a4d%3A0x7f8a4b0c55d65863!2sCome%20In!5e0!3m2!1sen!2shk!4v1760069023937!5m2!1sen!2shk" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default GoogleMap;