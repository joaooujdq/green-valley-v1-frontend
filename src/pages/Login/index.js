import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

import api from '../../services/api'

import logoImage from '../../assets/logo.svg'
import padlock from '../../assets/padlock.png'

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function login(e) {
        e.preventDefault();

        const data = {
            username,
            password,
        };

        try {
            const response = await api.post('auth/signin', data);

            localStorage.setItem('username', username);
            localStorage.setItem('accessToken', response.data.token);

            history.push('/books')
        } catch (err) {
            alert('Login failed! Try again!');
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
        <div className="login-container">
            <section className="form">

                <form onSubmit={login}>
                    <h1>Login</h1>
                    <div className='input-username'>
                        <h2>Username: </h2>
                        <input
                            placeholder="Username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className='input-password'>
                        <h2>Password: </h2>
                        <input
                            type="password" placeholder="Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='checkbox'>
                        <input type="checkbox" />
                        <h3>Keep me logged in</h3>
                    </div>
                    
                    <button type="submit">Sign in</button>
                    <button className="create-account" type="submit">Create account</button>
                    <h4>Forgot your password? Click Here</h4>
                </form>
            </section>

        </div>
    )

}