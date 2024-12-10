import React from 'react';
import { Link } from 'react-router-dom';

function Navbar()
{
    return(
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/queer-athletes">Queer Athletes</Link></li>
                <li><Link to="/media-analysis">Media Analysis</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;