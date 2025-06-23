import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

function Projects() {
    return (
        <div className='projects'>
            <h1>My projects</h1>
            <ul style={{listStyle: 'none', padding: 0}}>
                {projects.map((project) => (
                    <li key={project.id} style={{marginBottom: '20px'}}>
                        <h2>{project.name}</h2>
                        <img src={project.image} alt={project.name} width='300' />
                        <p>{project.description}</p>
                        <a href={project.url} target='_blank'>Visit Project</a>                    
                    </li>
                ))}
            </ul>
            <Link to='/'>Back to Home</Link>
        </div>
    );
};

export default Projects;