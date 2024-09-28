import React from 'react';
import './Loader.css'; // Ensure correct path to the Loader component
  // Import the CSS for styling the loader

const Loader = () => {
return (
    <div className="loader-container">
        <div className="loader"></div>
        <p>Loading...</p>
    </div>
);
};

export default Loader;
