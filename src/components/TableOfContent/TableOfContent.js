import React from 'react';
import './TableOfContent.css';

const TableOfContent = () => {
  return (
    <div id='table-of-contents' className='tl'>
      <h2>Table of Contents</h2>
      <div id="text-table-of-contents">
        <ul>
          <li><a href="#interests">1. Interests</a></li>
          <li><a href="#education-and-training">2. Education and Training</a></li>
          <li><a href="#personal-projects">3. Personal Projects</a>
            <ul>
              <li><a href="#face-recognition-project">3.1. Face Recognition Project</a></li>
              <li><a href="#natural-selection-project">3.2. Natural Selection Project</a></li>
            </ul>
          </li>
          <li><a href="#contact-info">4. Contact Info</a></li>
        </ul>
      </div>
    </div>
  );
}

export default TableOfContent;