import React, { useState, useEffect } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiDelete, FiShare2, FiTrash2 } from 'react-icons/fi'
import { FiPower, FiEdit, FiShoppingCart, FiHeart, FiArrowDown } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';

import logoImage from '../../assets/logo.webp'
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function ProfileSettings() {

    const [page, setPage] = useState(1);

    return (
        <>
            <Header />

            <h1 className='profile-settings'>PROFILE SETTINGS</h1>
            <div className="profile-settings-container" >
                <div className='settings-menu'>
                    <h2>My profile</h2>
                    <h2>Confirm your email</h2>
                    <h2>Change your email</h2>
                    <h2>Change your password</h2>
                    <h2>Change your username</h2>
                    <h2>Access my orders</h2>
                    <h2>Access my addresses</h2>
                    <h2>Delete your account</h2>
                </div>
                <div className='menu-sections'>

                    <div className='my-profile'>
                        <h3>My profile</h3>
                        <div className='row'>
                            <div>
                                <h4>Name: </h4>
                                <input placeholder='profile name'></input>
                            </div>
                            <div>
                                <h4>Email: </h4>
                                <input placeholder='profile email'></input>

                            </div>
                        </div>
                    </div>
                    <div className='conf-email'>
                        <h3>Confirm your email</h3>
                        <button>send code</button>
                        <h4>Your email has already been confirmed</h4>
                    </div>

                    <div className='change-email'>
                        <h3>Change your email</h3>
                        <div className='row'>
                            <div>
                                <h4>New email: </h4>
                                <input placeholder='new email'></input>
                            </div>
                            <div>
                                <h4>Actual password: </h4>
                                <input placeholder='actual password'></input>
                            </div>
                        </div>
                    </div>

                    <div className='change-pass'>
                        <h3>Change your password</h3>
                        <div className='row'>
                            <div>
                                <h4>Old password: </h4>
                                <input placeholder='old password'></input>
                            </div>
                            <div>
                                <h4>New password: </h4>
                                <input placeholder='new password'></input>
                            </div>
                            <div>
                                <h4>Confirm password: </h4>
                                <input placeholder='confirm password'></input>
                            </div>
                        </div>
                    </div>

                    <div className='change-name'>
                        <h3>Change your username</h3>
                        <div className='row'>
                            <div>
                                <h4>New Username: </h4>
                                <input placeholder='new username'></input>
                            </div>
                            <div>
                                <h4>Actual password: </h4>
                                <input placeholder='actual password'></input>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='my-orders'>
                            <h3>Access my orders</h3>
                            <button>My orders</button>
                        </div>

                        <div className='my-addresses'>
                            <h3>Access my addresses</h3>
                            <button>My addresses</button>
                        </div>

                        <div className='delete'>
                            <h3>Delete your account</h3>
                            <button>Delete account</button>
                        </div>

                    </div>


                </div>
            </div>
            <Footer />

            {/* <section className="form">
                    <img src={logoImage} alt="Erudio" />
                    <h1>{bookId === '0' ? 'Add New' : 'Update'} Book</h1>
                    <p>Enter the book information and click on {bookId === '0' ? "'Add'" : "'Update'"}!</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#251fc5" />
                        Back to Book
                    </Link>
                </section>
                <form onSubmit={saveOrUpdate}>
                    <input
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input
                        placeholder="Author"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                    <input
                        type="date"
                        value={launchDate}
                        onChange={e => setLaunchDate(e.target.value)}
                    />
                    <input
                        placeholder="Price"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                    />

                    <button className="button" type="submit">{bookId === '0' ? 'Add' : 'Update'}</button>
                </form> */}

        </>

    );
}