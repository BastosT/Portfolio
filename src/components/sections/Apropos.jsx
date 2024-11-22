import React from 'react';
import { aboutMeContent } from "../../data/constants";

const AboutMe = () => {
    return (
        <div className="bg-gray-800 text-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">À propos de moi</h2>
          <p className="mb-4">{aboutMeContent.introduction}</p>
          <p className="mb-4">{aboutMeContent.activities}</p>
          <p className="mb-4">{aboutMeContent.hobbies}</p>
          <p className="mb-4">{aboutMeContent.closing}</p>
        </div>
      );
};

export default AboutMe;



