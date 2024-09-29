import React from 'react';
import { motion } from 'framer-motion';
import './Team.css';

import vivek from '../assets/images/vivek3.jpg';
import param from '../assets/images/param.jpg';
import astha from '../assets/images/astha.jpg';
import shraddha from '../assets/images/shraddha.jpg';
import neel from '../assets/images/Neel.jpg';

const Team = () => {
  const teamMembers = [
    { name: 'Vivek Shahare', branch: 'Computer Science and Engineering', image: vivek ,description:'He is a Software Enthusiast with great command in Machine Learning and full stack development. A quick learner and passionate about learning, Vivek is also a former member of the Official Robotics team, RNXG, of the college.'},
    { name: 'Param Bhatkar', branch: 'Electrical', image: param ,description:'A passionate learner and engineer, Param serves as the President of the Training and Placement Cell of the college, dedicated to enhancing student opportunities and experiences. '},
    { name: 'Astha Dhapodkar', branch: 'Information Technology', image: astha ,description:'Astha is a dedicated problem solver and the Lead of Content Writing, holding more than two key positions within our organization. Her exceptional ability to tackle challenges and create compelling content makes her an invaluable asset to our team'},
    { name: 'Shraddha Malode', branch: 'EXTC', image: shraddha,description:'Shraddha is a creative thinker and innovative mind, known for her skills in project management and coordination' },
    { name: 'Neel Chavan', branch: 'Electrical', image: neel ,description:'He is a proactive learner and an aspiring engineer, always eager to take on new challenges and develop his skills in technology and engineering. He is also the Secretary of the Entrepreneurship Cell.'},
    { name: 'Himanshu Parate', branch: 'Computer Science & Engineering', image: 'path_to_image6',description:'A dedicated developer with a knack for solving complex problems, Himanshu is passionate about programming and continually enhancing his technical skills.' },
  ];

  const slideInAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.5 } // Delay based on index
    }),
  };

  return (
    <div className="team-container">
      <h1>Meet Our Team</h1>
      <div className="team-list">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-member"
            variants={slideInAnimation}
            initial="hidden"
            animate="visible"
            custom={index} // Pass index for delay
          >
            <img src={member.image} alt={member.name} className="member-image" />
            <h2>{member.name}</h2>
            <p>{member.branch}</p>
            <p>{member.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Team;
