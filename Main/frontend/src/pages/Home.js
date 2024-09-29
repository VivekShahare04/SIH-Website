import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader'; // Your loader component
import Navbar from '../components/Navbar'; // Your navigation bar
import image3d from '../components/image3d'; // Your 3D image component
import './Home.css'; // Your CSS file for styling

const Home = () => {
  const [loading, setLoading] = useState(true); // Loader state

  // Simulate loading time (e.g., 3 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loader after 3 seconds
    }, 3000); // 3000ms = 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div className="home-container"> 
      {loading ? (
        <Loader />  // Show loader while loading is true
      ) : (
        <>
          <Navbar />  // Show Navbar after loading is complete
          <div className="content">
            <image3d />  {/* Display 3D image */}
            
            {/* Paragraph content */}
            <div className="description">
              <h1>About Our Project</h1>
              <p>
                Welcome to our project! This application is designed to provide an innovative solution to [your project’s main goal]. 
                Built with cutting-edge technology, including React for the front end and Node.js with MongoDB for the back end, 
                this project serves as a robust platform for [describe the functionality or purpose].
              </p>
              <p>
                Our project aims to [describe the specific aims of your project]. 
                We focus on [key aspects of your work], ensuring that [more details on the user benefits].
                Whether you're here to explore or contribute, we hope this platform provides the tools and information you need.
              </p>
              <h2>Technologies Used:</h2>
              <ul>
                <li>React for the dynamic front-end interface</li>
                <li>Node.js for back-end API integration</li>
                <li>MongoDB for storing user data and resources</li>
                <li>Three.js for rendering 3D models</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
