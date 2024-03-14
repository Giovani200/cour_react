// un compsant de navigation à apppelmer sur toutes mes pages
// on oublie pas 
import React from 'react';
// en react le a pour la navigation est un navlink
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        // en react pour attribuer une class on met className
        <div className="navigation">
            <ul>
                {/* je vais te mettre une class name mais cette classe je voudrais que tu la mette que si la classe est active */}
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>
                        Accueil
                    </li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>
                        A propos
                    </li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;