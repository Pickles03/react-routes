import React from 'react';
import { Link } from 'react-router-dom';
import {studies, experiences} from '../data/resume';

function Resume() {
    return (
        <div className='resume'>
            <h1>Resume</h1>
            <h2>Education</h2>
            <ul>
                {studies.map((study) => (
                    <li key={study.id}>
                        {study.title} - {study.institution}, {study.date}
                    </li>
                ))}
            </ul>
            <h2>Work experience</h2>
            <ul>
                {experiences.map((experience) => (
                    <li key={experience.id}>
                        {experience.title} - {experience.company}, {experience.date}
                    </li>
                ))}
            </ul>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default Resume;

