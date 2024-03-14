// tjrs

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]) // on crée un state pour stocker les données [data, setData
    // on se cré une <vari>ble rangValue
    const [rangValue, setRangValue] = useState(26); //je veux 26 pays au début
    // on créer des variables pour stockerles pays de chaque continent
    const [selectedRadio, setSelectedRadio] = useState(''); // on crée un state pour stocker les radios [selectedRadio, setSelectedRadio
    const radios = [ "Africa", "America", "Asia", "Europe", "Oceania"]; // on crée un tableau de radios

    // le useeffect se joe lorsque le composant est monté
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) =>
                setData(res.data));

    }, []);

    return (
        <div className='countries'>
            <ul className="radio-container">
                <input type="range" min="1" max="250" defaultValue={rangValue} onChange={(e) => setRangValue(e.target.value)} />

                {/* on map  la radios */}
                {radios.map((continent) => (
                    <li>
                        <input type="radio" id={continent} name='continentRadio' onChange={(e) => setSelectedRadio(e.target.id)}/>
                        <label htmlFor={continent}>{continent}</label>

                    </li>
                ))}
            </ul>
            <ul>
                {data
                    .filter((country) => country.continents[0].includes(selectedRadio))
                    .slice(0, rangValue).map((country, index) => (
                    <Card key={index} country={country} />
                ))}
            </ul>
        </div>
    );
};

export default Countries;