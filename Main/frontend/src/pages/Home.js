import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader'; // Your loader component
import Navbar from '../components/Navbar'; // Your navigation bar
import image3d from '../components/image3d'; // Your 3D image component
import './Home.css'

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
    <div className="home-container"> {/* Add the background class here */}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <image3d />
        </>
      )}
    </div>
  );
};

export default Home;
