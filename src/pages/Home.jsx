import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
    <div className="home">
        <h1>Ielyzaveta Krysiatetska Melnik</h1>
        <p>Junior full-stack developer in training with a background in psychology, currently building web development skills with JavaScript, Node.js, and related technologies. Passionate about creating engaging digital experiences and aiming to move into game development in the near future.</p>

        <nav>
            <ul>
                <li><Link to='/projects'>See my projects</Link></li>
                <li><Link to='/resume'>See my resume</Link></li>
            </ul>
        </nav>
    </div>
    )
};

export default Home;