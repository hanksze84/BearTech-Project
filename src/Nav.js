import React from 'react'; 
import '/App.css'; 

const Nav = () => {
    return(
        <nav>
            <h3>Logo</h3>
            <ul className = 'nav-links'> 
                <li>Projects</li>
                <li>Login</li>
            </ul>
        </nav>
    );
}

export default Nav; 