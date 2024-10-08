// src/pages/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import './Resources.css'

const Resources = () => {
  const resourcesList = [
    {
      title: 'Dataset by Dr.Sachin Jadhao',
      description: 'Train a machine learning model on a 20,000-sample dataset created by Dr.Sachin Jadhao (Chemical Engineering ,Phd.ICT Bombay & Post doct.Cornell University,USA ) to efficiently predict outcomes. The process includes data preprocessing, feature selection, and model training, enhancing accuracy through techniques like cross-validation.',
      link: 'https://drive.google.com/file/d/1Lct5Rv71bjEpwOaY_2Tkf_cbaru2pwfl/view',
    },
    {
      title: 'Integration of IOT + Machine Learning',
      description: 'Leverage the power of IoT and Machine Learning by integrating smart devices with intelligent algorithms to automate data collection, real-time analysis, and predictive insights for enhanced decision-making and operational efficiency.',
      link: 'https://drive.google.com/file/d/19kc273F09dkBOrpqyRnhgSbZie82nj8W/view?usp=sharing',
    },
    {
      title: 'Capacitance-Based Measurement of Electrical Conductivity',
      description: 'This study presents a new method for measuring electrical conductivity using capacitance techniques. By evaluating capacitance changes related to ionic concentration, this non-invasive approach provides accurate conductivity assessments.',
      link: 'https://drive.google.com/file/d/1L3SVgiP8iWtShcocTib9xpuRKm0DgePA/view?usp=sharing',
    },
    {
      title: 'More resources',
      description: 'More about resources with Drive link',
      link: 'https://drive.google.com/drive/folders/1q3C6hnrp0MufXhvJdBLaXdR3NLrScbZc',
    },
  ];

  return (
    <div className="resources-container">
      <h1>Resources</h1>
      <div className="resources-list">
        {resourcesList.map((resource, index) => (
          <div key={index} className="resource-item">
            <h2>{resource.title}</h2>
            <p>{resource.description}</p>
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              Click to open
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
