import React, { useState, useEffect } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { FiArrowLeft, FiShare2 } from 'react-icons/fi'
import { FiPower, FiEdit, FiShoppingCart, FiHeart, FiArrowDown } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';

import logoImage from '../../assets/logo.webp'
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function Product() {

    return (
        <>
            <Header />
            <div className="product-container" >
                <div className="product-photos" >
                    <img className='biggest-photo' src={logoImage} alt="Product Image" />
                    <div className='smallest-photos'>
                        <img src={logoImage} alt="Product Image" />
                        <img src={logoImage} alt="Product Image" />
                        <img src={logoImage} alt="Product Image" />
                        <img src={logoImage} alt="Product Image" />
                    </div>
                </div>
                <div className='product-info'>
                    <h1>Example Sculpture</h1>
                    <h2>made with air dry painted with acrylic paint varnished with glossy varnish made with air dry painted with acrylic paint varnished with glossy varnish</h2>
                    <h3>R$ 999,00</h3>
                    <h2>Select Size:</h2>
                    <div className='radio-buttons'>
                        <input type="radio" id="sizeOption1" name="size" value="S" />
                        <label for="sizeOption1">Small</label>
                        <input type="radio" id="sizeOption2" name="size" value="M" />
                        <label for="sizeOption2">Medium</label>
                        <input type="radio" id="sizeOption3" name="size" value='L' />
                        <label for="sizeOption3">Large</label>
                    </div>
                    <div className='product-buttons'>
                        <button className='buy-button'>Buy</button>
                        <button className='fav-button'>
                                <FiHeart size={32} color="#004F3C" />
                        </button>
                        <button className='share-button'>
                            <p>Share</p>
                            <FiShare2 size={30} color="#004F3C" />
                        </button>
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