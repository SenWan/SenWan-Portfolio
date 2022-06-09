import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div id='skills' className='text-white container mt-5'>
            <h2 className='text-center'>My Skills</h2>
            <p>HTML</p>
            <div className="skills-container">
            <div class="skills html">90%</div>
            </div>

            <p>CSS</p>
            <div className="skills-container">
            <div className="skills css">80%</div>
            </div>

            <p>JavaScript</p>
            <div className="skills-container">
            <div className="skills js">60%</div>
            </div>

            <p>React</p>
            <div className="skills-container">
            <div className="skills react">70%</div>
            </div>
            
            <p>Node.js</p>
            <div className="skills-container">
            <div className="skills node">40%</div>
            </div>
            
            <p>MongoDB</p>
            <div className="skills-container">
            <div className="skills mongo">40%</div>
            </div>
        </div>
    );
};

export default Skills;