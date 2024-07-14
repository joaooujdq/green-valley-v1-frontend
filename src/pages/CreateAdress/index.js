import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

import api from '../../services/api'


export default function CreateAddress() {

    const [id, setId] = useState(null);
    const [cep, setCep] = useState('');
    const [streetName, setStreetName] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [complement, setComplement] = useState('');
    const accessToken = localStorage.getItem('accessToken');

    //const history = useHistory();

 
    async function saveOrUpdate(e){
        e.preventDefault();

        const data = {
            id,
            cep,
            streetName,
            houseNumber,
            neighborhood,
            complement
        };

        try {
                await api.post('api/account/v1', data, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                })
            } catch (err) {
            alert('Error while recording Book! Try again!');
        }
    };
        /*
        return (
            <div className="login-container">
                <section className="form">
                    <img src={logoImage} alt="Erudio Logo"/>
                    <form onSubmit={login}>
                        <h1>Access your Account</h1>
                        <input
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            type="password" placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
    
                        <button className="button" type="submit">Login</button>
                    </form>
    
                </section>
    
                <img src={padlock} alt="Login"/>
    
            </div>
        ) */


    return (
        <div className="create-address-container">
            <section className="form" onSubmit={saveOrUpdate}>
                {/* <form onSubmit={login}> */}
                <form >
                    <h1>Create Address</h1>
                    <div>
                        <h2>CEP: </h2>
                        <input className="cep-input" placeholder="CEP" value={cep} onChange={e => setCep(e.target.value)}/>
                    </div>
                    <div>
                        <h2>Street name: </h2>
                        <input placeholder="Street name" value={streetName} onChange={e => setStreetName(e.target.value)}/>
                    </div>
                    <div>
                        <h2>House number: </h2>
                        <input  placeholder="House number" value={houseNumber} onChange={e => setHouseNumber(e.target.value)}/>
                    </div>
                    <div>
                        <h2>Neighborhood name: </h2>
                        <input  placeholder="Neighborhood name" value={neighborhood} onChange={e => setNeighborhood(e.target.value)}/>
                    </div>
                    <div>
                        <h2>Complement: </h2>
                        <input  placeholder="Complement"  value={complement} onChange={e => setComplement(e.target.value)}/>
                    </div>

                    <button type="submit">Register</button>
                </form>
            </section>

        </div>
    )

}