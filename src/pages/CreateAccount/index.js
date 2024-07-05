import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

import api from '../../services/api'


export default function CreateAcccount() {

    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const accessToken = localStorage.getItem('accessToken');

    //const history = useHistory();

 
    async function saveOrUpdate(e){
        e.preventDefault();
        console.log("valor data: " + dateOfBirth + "   tipo data: " + typeof(dateOfBirth));

        const data = {
            id,
            name,
            email,
            password,
            dateOfBirth
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
        <div className="create-account-container">
            <section className="form" onSubmit={saveOrUpdate}>
                {/* <form onSubmit={login}> */}
                <form >
                    <h1>Create Account</h1>
                    <div>
                        <h2>Name: </h2>
                        <input className="name-input" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                        <h2>Email: </h2>
                        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <h2>Password: </h2>
                        <input className="password-input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <h2>Confirm password: </h2>
                        <input className="password-input"  type="password" placeholder="Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                    </div>
                    <div>
                        <h2>Date of birth: </h2>
                        <input type="date" min="1900-01-01" max="2024-12-31" className="birth-input" placeholder="01-01-1999"  value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)}/>
                    </div>

                    <button type="submit">Register</button>
                </form>
            </section>

        </div>
    )

}