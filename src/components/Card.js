// tjrs
import React from 'react';

const Card = ({ country }) => {
    return (
        <li className="card">
            <img src={country.flags.svg} alt={"drapeau" + country.translations.fra.cammon} />
            <div className="infos">
                <h2>{country.translations.fra.common}</h2>
                <p>Capital: {country.capital}</p>
                <p>Population: {country.population}</p>
                <a href={'https://www.google.com/maps/place/' + country.latlng}>Voir sur google maps</a>
                
           </div>
        </li>
    );
};

export default Card;