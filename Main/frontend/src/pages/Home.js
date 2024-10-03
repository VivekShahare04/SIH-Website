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
          <Navbar />  
          <div className="content">
            <image3d />  {/* Display 3D image */}
            
            {/* Paragraph content */}
            <div className="description">
              <h1>Project Overview</h1>
              <p>
              Welcome to our project! This application provides an innovative solution for testing water quality in rural areas through personalized testing kits. 
              Utilizing capacitive sensing technology and machine learning, we aim to deliver accurate and real-time assessments of residual chlorine and other contaminants.
              </p>
              <p>
              Our project focuses on ensuring safe drinking water by automating water quality testing, making it accessible and affordable for rural communities. 
              We leverage advanced technologies to provide reliable insights, enabling informed decision-making regarding water safety.
              </p>
              <h2>Technologies Used:</h2>
              <ul>
                <li>Capacitive Sensing Technology for accurate water quality measurements</li>
                <li>Machine Learning for predictive analytics and real-time monitoring</li>
                <li>React for the dynamic front-end interface</li>
                <li>ThingSpeak for live data monitoring and analysis</li>
                <li>Arduino for hardware integration and sensor control</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
